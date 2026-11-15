# Xác minh tích hợp Android với n8n trên môi trường kiểm thử

Hạng mục [KAN-17](https://haixuan.atlassian.net/browse/KAN-17) thuộc [KAN-8](https://haixuan.atlassian.net/browse/KAN-8). Mã nguồn tham chiếu ở [commit c468b1f](https://github.com/nguyenxuanhai-arch/App-food-odering/commit/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8).

## Truy xuất Jira và mã nguồn

| Ticket | Nội dung | Mã nguồn tại commit gốc |
| --- | --- | --- |
| [KAN-17](https://haixuan.atlassian.net/browse/KAN-17) | Xác minh tích hợp Android với n8n trên môi trường kiểm thử | [My_workflow.json](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/My_workflow.json), [PaymentApiService.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/services/PaymentApiService.java), [PaymentActivity.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/PaymentActivity.java), [PaymentHistoryFragment.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/fragments/PaymentHistoryFragment.java) |
| [KAN-33](https://haixuan.atlassian.net/browse/KAN-33) | Chạy kiểm thử hợp đồng webhook và trường hợp lỗi | [My_workflow.json](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/My_workflow.json), [PaymentApiService.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/services/PaymentApiService.java), [PaymentActivity.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/PaymentActivity.java) |
| [KAN-34](https://haixuan.atlassian.net/browse/KAN-34) | Đối chiếu bản ghi đơn và kết quả hiển thị mã QR | [PaymentActivity.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/PaymentActivity.java), [PaymentHistoryFragment.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/fragments/PaymentHistoryFragment.java) |

## Kết quả chạy cục bộ

Function node **Tạo VietQR** tại commit gốc được chạy trực tiếp với dữ liệu kiểm thử, không gửi HTTP hay tạo giao dịch.

| Ca | URL QR được tạo | Có mã đơn | Thời hạn |
| --- | --- | --- | --- |
| Đủ trường | Có | Có | 900 giây |
| Số tiền bằng 0 | Không | Không | — |
| Thiếu orderId | Có | Không | 900 giây |

Ca thiếu mã đơn vẫn tạo URL QR. Hạng mục sửa là [KAN-37](https://haixuan.atlassian.net/browse/KAN-37). Còn cần chạy Android đến webhook thật trên môi trường kiểm thử và đối chiếu bản ghi đơn, thông báo lỗi, ảnh QR hiển thị theo [KAN-34](https://haixuan.atlassian.net/browse/KAN-34).
