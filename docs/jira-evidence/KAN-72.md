# [Thanh toán QR] Bật nút tải QR khi phản hồi thiếu URL ảnh

[KAN-72](https://haixuan.atlassian.net/browse/KAN-72)

**Môi trường và mức xác minh**

Mã Android Java tại commit `c468b1f`. Đối chiếu callback Retrofit và nhánh tải ảnh. Chưa chạy app với phản hồi kiểm thử.

**Điều kiện tiên quyết**

Màn hình thanh toán đang gọi dịch vụ tạo QR. Môi trường kiểm thử có thể trả phản hồi HTTP 200 với body hợp lệ về kiểu dữ liệu nhưng thiếu `qrImageUrl`.

**Bước tái hiện trên môi trường kiểm thử**

1. Mở thanh toán từ một đơn hợp lệ.
2. Trả HTTP 200 với số tiền và thời hạn hợp lệ, bỏ `qrImageUrl`.
3. Kiểm tra thông báo lỗi, ảnh QR và nút tải.

**Kết quả quan sát qua mã nguồn**

Theo callback, HTTP thành công và body khác null được xử lý như có QR. Mã hiển thị nút tải và truyền URL thiếu vào Glide. Nhánh thông báo lỗi tạo mã QR không được gọi.

**Kết quả mong đợi**

Hiển thị lỗi tạo QR, ẩn hoặc vô hiệu hóa nút tải và cho phép thử lại. Phản hồi có URL QR hợp lệ vẫn hiển thị ảnh và cho phép tải.

**Kiểm thử lại**

Chạy lại với URL bị thiếu, giá trị rỗng và URL hợp lệ. Xác nhận UI xử lý đúng cả ba trường hợp.

**Bằng chứng:** [Mã nguồn liên quan](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/PaymentActivity.java#L149-L165).

**Hạng mục liên quan:** [KAN-17](https://haixuan.atlassian.net/browse/KAN-17), [KAN-64](https://haixuan.atlassian.net/browse/KAN-64).

**Trạng thái:** Đã ghi nhận qua rà soát mã. Bản sửa và kết quả kiểm thử lại sẽ được cập nhật sau.