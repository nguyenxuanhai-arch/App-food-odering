# Bổ sung kiểm thử hồi quy đặt món trên Android

Hạng mục [KAN-18](https://haixuan.atlassian.net/browse/KAN-18) thuộc [KAN-8](https://haixuan.atlassian.net/browse/KAN-8). Mã nguồn tham chiếu ở [commit c468b1f](https://github.com/nguyenxuanhai-arch/App-food-odering/commit/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8).

## Truy xuất Jira và mã nguồn

| Ticket | Nội dung | Mã nguồn tại commit gốc |
| --- | --- | --- |
| [KAN-18](https://haixuan.atlassian.net/browse/KAN-18) | Bổ sung kiểm thử hồi quy đặt món trên Android | [CartFragment.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/fragments/CartFragment.java), [CartAdapter.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/adapter/CartAdapter.java), [ExampleUnitTest.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/test/java/com/example/android_lab/ExampleUnitTest.java), [ExampleInstrumentedTest.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/androidTest/java/com/example/android_lab/ExampleInstrumentedTest.java), [ConfirmOrderActivity.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/ConfirmOrderActivity.java), [PaymentActivity.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/PaymentActivity.java) |
| [KAN-35](https://haixuan.atlassian.net/browse/KAN-35) | Viết ca kiểm thử số lượng và tổng tiền giỏ hàng | [CartFragment.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/fragments/CartFragment.java), [CartAdapter.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/adapter/CartAdapter.java), [ExampleUnitTest.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/test/java/com/example/android_lab/ExampleUnitTest.java) |
| [KAN-36](https://haixuan.atlassian.net/browse/KAN-36) | Viết và chạy ca tích hợp giỏ hàng đến thanh toán | [ExampleInstrumentedTest.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/androidTest/java/com/example/android_lab/ExampleInstrumentedTest.java), [ConfirmOrderActivity.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/ConfirmOrderActivity.java), [PaymentActivity.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/PaymentActivity.java) |

## Ma trận hồi quy chờ thực thi

| Ca | Dữ liệu và thao tác | Kết quả mong đợi | Ticket |
| --- | --- | --- | --- |
| CART-01 | Món 15.000 × 2 và món 25.000 × 1. Xóa món đầu | Tổng từ 55.000 về 25.000 | [KAN-35](https://haixuan.atlassian.net/browse/KAN-35) |
| CART-02 | Giảm từ 2 xuống 1 rồi thao tác giảm tiếp | Số lượng lưu không âm hoặc bằng 0. Nếu UI hỗ trợ xóa ở biên, dòng món mất và tổng cập nhật | [KAN-35](https://haixuan.atlassian.net/browse/KAN-35) |
| ORDER-01 | Giỏ hợp lệ, thông tin giao hàng đầy đủ, phản hồi QR hợp lệ | Có cùng mã đơn trên màn hình thanh toán và lịch sử | [KAN-36](https://haixuan.atlassian.net/browse/KAN-36) |
| ORDER-02 | Giỏ hợp lệ, webhook lỗi hoặc thiếu URL QR | Giao diện báo lỗi và không hiển thị thanh toán thành công | [KAN-36](https://haixuan.atlassian.net/browse/KAN-36) |

Theo dõi bản dựng, thiết bị, trạng thái thực tế và bằng chứng khi chạy. Các ca trên mới được thiết kế. Chưa viết mã kiểm thử tự động hoặc chạy trên Android.
