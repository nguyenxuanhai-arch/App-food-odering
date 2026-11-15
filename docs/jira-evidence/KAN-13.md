# Quản lý giỏ hàng theo tài khoản

Hạng mục [KAN-13](https://haixuan.atlassian.net/browse/KAN-13) thuộc [KAN-7](https://haixuan.atlassian.net/browse/KAN-7). Mã nguồn tham chiếu ở [commit c468b1f](https://github.com/nguyenxuanhai-arch/App-food-odering/commit/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8).

## Truy xuất Jira và mã nguồn

| Ticket | Nội dung | Mã nguồn tại commit gốc |
| --- | --- | --- |
| [KAN-13](https://haixuan.atlassian.net/browse/KAN-13) | Quản lý giỏ hàng theo tài khoản | [CartFragment.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/fragments/CartFragment.java), [CartAdapter.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/adapter/CartAdapter.java) |
| [KAN-26](https://haixuan.atlassian.net/browse/KAN-26) | Đọc giỏ và cập nhật số lượng trong Realtime Database | [CartFragment.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/fragments/CartFragment.java), [CartAdapter.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/adapter/CartAdapter.java) |
| [KAN-27](https://haixuan.atlassian.net/browse/KAN-27) | Xóa món và tính lại tổng tiền | [CartFragment.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/user/fragments/CartFragment.java) |

## Phạm vi đã đối chiếu

Giỏ dùng UID, cập nhật số lượng, xóa món và tính tổng theo giá nhân số lượng.

Bằng chứng là mã đã tồn tại trên `master` tại commit gốc. Lần đối chiếu này xác nhận phạm vi triển khai trong mã. Trạng thái chạy trên Android cần bằng chứng kiểm thử riêng.
