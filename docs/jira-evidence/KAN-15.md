# Tạo yêu cầu thanh toán và hiển thị mã QR

Hạng mục [KAN-15](https://haixuan.atlassian.net/browse/KAN-15) thuộc [KAN-8](https://haixuan.atlassian.net/browse/KAN-8). Mã nguồn tham chiếu ở [commit c468b1f](https://github.com/nguyenxuanhai-arch/App-food-odering/commit/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8).

## Truy xuất Jira và mã nguồn

| Ticket | Nội dung | Mã nguồn tại commit gốc |
| --- | --- | --- |
| [KAN-15](https://haixuan.atlassian.net/browse/KAN-15) | Tạo yêu cầu thanh toán và hiển thị mã QR | [PaymentApiService.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/services/PaymentApiService.java), [PaymentRequest.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/services/PaymentRequest.java), [PaymentActivity.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/PaymentActivity.java), [PaymentResponse.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/services/PaymentResponse.java) |
| [KAN-29](https://haixuan.atlassian.net/browse/KAN-29) | Gọi dịch vụ thanh toán bằng Retrofit | [PaymentApiService.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/services/PaymentApiService.java), [PaymentRequest.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/services/PaymentRequest.java), [PaymentActivity.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/PaymentActivity.java) |
| [KAN-30](https://haixuan.atlassian.net/browse/KAN-30) | Lưu đơn theo người dùng và hiển thị ảnh QR | [PaymentActivity.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/PaymentActivity.java), [PaymentResponse.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/services/PaymentResponse.java) |

## Phạm vi đã đối chiếu

Mã nguồn dựng yêu cầu, ghi bản ghi thanh toán và tải ảnh QR từ phản hồi.

Bằng chứng là mã đã tồn tại trên `master` tại commit gốc. Lần đối chiếu này xác nhận phạm vi triển khai trong mã. Trạng thái chạy trên Android cần bằng chứng kiểm thử riêng.
