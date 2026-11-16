# [Xác nhận đơn] Chấp nhận số điện thoại giao hàng chỉ có một chữ số

[KAN-71](https://haixuan.atlassian.net/browse/KAN-71)

**Môi trường và mức xác minh**

Mã Android Java tại commit `c468b1f`. Đối chiếu mã nguồn và bố cục ô số điện thoại. Chưa chạy emulator.

**Điều kiện tiên quyết**

Khách đã đăng nhập, giỏ có ít nhất một món và màn hình xác nhận đơn đã mở.

**Bước tái hiện trên môi trường kiểm thử**

1. Nhập tên và địa chỉ hợp lệ.
2. Nhập `1` vào ô số điện thoại.
3. Nhấn nút xác nhận đơn.

**Kết quả quan sát qua mã nguồn**

Theo đường thực thi trong mã, giá trị `1` vượt qua kiểm tra bỏ trống. Ứng dụng gửi cập nhật hồ sơ và chuyển tới màn hình thanh toán với giá trị này.

**Kết quả mong đợi**

Hiển thị lỗi ở ô số điện thoại và giữ người dùng tại màn hình xác nhận. Chỉ lưu và chuyển sang thanh toán khi số điện thoại thỏa quy tắc giao hàng đã thống nhất.

**Kiểm thử lại**

Chạy lại với `1`, chuỗi trống và một số điện thoại hợp lệ theo cấu hình. Xác nhận hai ca sai không đổi hồ sơ và không đi tới thanh toán.

**Bằng chứng:** [Mã nguồn liên quan](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/ConfirmOrderActivity.java#L54-L75).

**Hạng mục liên quan:** [KAN-14](https://haixuan.atlassian.net/browse/KAN-14), [KAN-62](https://haixuan.atlassian.net/browse/KAN-62).

**Trạng thái:** Đã ghi nhận qua rà soát mã. Bản sửa và kết quả kiểm thử lại sẽ được cập nhật sau.