# Kiểm thử dữ liệu đầu vào và truy vết Jira

Truy vết: [KAN-4](https://haixuan.atlassian.net/browse/KAN-4), [KAN-37](https://haixuan.atlassian.net/browse/KAN-37), [KAN-74](https://haixuan.atlassian.net/browse/KAN-74).

Mở `Gio_hang_kiem_thu.html` trực tiếp bằng trình duyệt; không cần cài thư viện hoặc gọi dịch vụ ngoài. Đây là ứng dụng HTML kiểm thử; không phải bản dựng Android hay môi trường thanh toán.

1. Chọn v1.0, nhập 0 và thêm: thông báo nhận 0, trái QTY-01.
2. Dev bàn giao v1.1; Tester chạy lại 0: vẫn nhận 0. Ghi RETEST FAIL và trả về In Progress.
3. Dev bàn giao v1.2; chạy các ca 0, 1, -1, 1.5, rỗng, 2. Lưu kết quả và ảnh, sau đó đánh giá tiêu chí Done.
4. Chọn build khác hoặc Đặt lại giỏ để đặt lại dữ liệu trước ca tiếp theo.

Các phiên bản có lỗi được giữ có chủ đích để kiểm thử hồi quy. Không dùng cho sản phẩm thật. Không tạo comment Pass/Fail hoặc chuyển trạng thái trước khi quan sát chạy thực tế.

## Kiểm thử tự động

```sh
node --test tests/validation.test.cjs
```

16 test kiểm tra logic ứng dụng HTML kiểm thử và thực thi trực tiếp Function node `Tạo VietQR` trong `My_workflow.json`. Bộ test xác nhận hành vi tái hiện của v1.0/v1.1, sáu ca QTY-01 của v1.2, giữ giỏ khi đầu vào sai, cộng dồn, từ chối mã đơn thiếu/rỗng/khoảng trắng/sai kiểu, bảo toàn đường hợp lệ và chặn amount <= 0.

Test không gọi webhook, tải ảnh QR, tạo giao dịch hay chạy Android. Workflow `Validation QA` chạy cùng lệnh trên GitHub Actions và xuất artifact gồm ứng dụng HTML kiểm thử với log. Chỉ gọi CI đạt sau khi run trên GitHub thực sự hoàn tất.

## Thay đổi KAN-37

Áp dụng kiểm tra orderId ngay trong Function node của `My_workflow.json`, không chỉ ghi đoạn sửa ở Markdown. Chỉ thay logic đọc/kiểm tra orderId; các cấu hình khác được giữ nguyên. Cần import/triển khai có kiểm soát và xác minh Android–webhook trong môi trường QA trước khi kết luận tích hợp đạt.
