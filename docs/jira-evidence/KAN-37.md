# KAN-37 Kiểm tra mã đơn hàng trong workflow QR

[Ticket KAN-37](https://haixuan.atlassian.net/browse/KAN-37)

```javascript
const orderId = typeof body.orderId === "string" ? body.orderId.trim() : "";
if (!orderId) {
  throw new Error("Mã đơn hàng (orderId) là bắt buộc.");
}
```

Đoạn kiểm tra trên thay cho dòng đọc trực tiếp `body.orderId` ở Function node `Tạo VietQR`, trước khi sinh URL. Đây là đề xuất đã chạy cục bộ; file workflow trong repo chưa thay đổi.

```text
KAN-37 — Kiểm thử kiểm tra mã đơn hàng
Ngày kiểm thử: 16/11/2026 (giờ Việt Nam).
Đối tượng: Function node Tạo VietQR trong My_workflow.json.
So sánh: c468b1f và bản sửa đề xuất đã chạy cục bộ. Bản sửa chưa được áp dụng vào file workflow trên GitHub.
Phạm vi: chạy trực tiếp logic JavaScript cục bộ, không gọi webhook, không tải ảnh QR, không tạo giao dịch.

Ca kiểm thử | Trước sửa | Sau sửa
Đủ trường | Sinh URL QR | Sinh URL QR
Thiếu orderId | Sinh URL QR | Từ chối
orderId chỉ có khoảng trắng | Sinh URL QR | Từ chối
Số tiền bằng 0 | Từ chối | Từ chối
orderId không phải chuỗi | Sinh URL QR | Từ chối

Ca hợp lệ: amount=15000, mã đơn qa-order-37, URL được tạo và thời hạn 900 giây.
Kết quả: 5/5 hành vi của bản sửa khớp kỳ vọng. Kiểm thử Android và HTTP trên môi trường kiểm thử còn chờ.
```
