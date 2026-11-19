const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'qa/Gio_hang_kiem_thu.html'), 'utf8');
const core = html.match(/<script id="cart-core">([\s\S]*?)<\/script>/)[1];
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(core, sandbox);
test('KAN-4: v1.0 tái hiện lỗi nhận số lượng 0', () => {
  const result = sandbox.addToCart('v1.0', '0');
  assert.equal(result.accepted, true);
  assert.equal(result.message, 'Đã thêm 0 Sổ tay vào giỏ.');
});
test('KAN-4: v1.1 chặn số âm nhưng vẫn nhận 0, cần QA trả lại', () => {
  assert.equal(sandbox.addToCart('v1.1', '-1').accepted, false);
  assert.equal(sandbox.addToCart('v1.1', '0').accepted, true);
});
for (const [id,raw,accepted,count] of [
  ['01','0',false,0],['02','1',true,1],['03','-1',false,0],
  ['04','1.5',false,0],['05','',false,0],['06','2',true,2],
]) test(`KAN-4: TC-QTY-${id} trên v1.2`, () => {
  const result = sandbox.addToCart('v1.2',raw);
  assert.equal(result.accepted,accepted);
  assert.equal(result.count,count);
  assert.equal(result.total,count*25000);
});
test('KAN-4: từ chối dữ liệu sai và giữ nguyên giỏ đã có món', () => {
  for (const value of ['0','-1','','abc','Infinity','1.5','9007199254740992']) {
    const result=sandbox.addToCart('v1.2',value,3);
    assert.equal(result.accepted,false);
    assert.equal(result.count,3);
    assert.equal(result.total,75000);
  }
});
test('KAN-4: cộng dồn số lượng và tổng tiền hợp lệ',()=>{
  const result=sandbox.addToCart('v1.2','2',1);
  assert.equal(result.count,3);assert.equal(result.total,75000);
});
const workflow = JSON.parse(fs.readFileSync(path.join(root,'My_workflow.json'),'utf8'));
const code = workflow.nodes.find(n=>n.name==='Tạo VietQR').parameters.functionCode;
const execute = new Function('items',code);
for (const [name,orderId] of [['thiếu',undefined],['rỗng',''],['khoảng trắng','   '],['sai kiểu',37]]) {
  test(`KAN-37: từ chối orderId ${name}`,()=>{
    assert.throws(()=>execute([{json:{body:{userId:'qa-user',amount:15000,orderId}}}]),/orderId/);
  });
}
test('KAN-37: đầu vào hợp lệ giữ đúng mã đơn và sinh dữ liệu QR',()=>{
  const result=execute([{json:{body:{userId:'qa-user',amount:15000,orderId:'  qa-order-37  '}}}])[0].json;
  assert.equal(result.orderId,'qa-order-37');assert.equal(result.amount,15000);
  assert.ok(result.qrImageUrl.startsWith('https://img.vietqr.io/image/'));
  assert.ok(result.expiredAt > Math.floor(Date.now()/1000));
});
test('KAN-37: vẫn từ chối số tiền bằng 0 và âm',()=>{
  for (const amount of [0,-1]) assert.throws(()=>execute([{json:{body:{orderId:'qa-order-37',amount}}}]),/Amount/);
});
// Chỉ chạy logic JavaScript; không gọi URL QR, webhook hoặc giao dịch.
