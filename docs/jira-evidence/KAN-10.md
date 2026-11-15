# Đăng ký và đăng nhập bằng Firebase Authentication

Hạng mục [KAN-10](https://haixuan.atlassian.net/browse/KAN-10) thuộc [KAN-6](https://haixuan.atlassian.net/browse/KAN-6). Mã nguồn tham chiếu ở [commit c468b1f](https://github.com/nguyenxuanhai-arch/App-food-odering/commit/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8).

## Truy xuất Jira và mã nguồn

| Ticket | Nội dung | Mã nguồn tại commit gốc |
| --- | --- | --- |
| [KAN-10](https://haixuan.atlassian.net/browse/KAN-10) | Đăng ký và đăng nhập bằng Firebase Authentication | [RegisterActivity.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/auth/RegisterActivity.java), [LoginActivity.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/auth/LoginActivity.java) |
| [KAN-21](https://haixuan.atlassian.net/browse/KAN-21) | Đăng ký bằng email và khởi tạo hồ sơ Firestore | [RegisterActivity.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/auth/RegisterActivity.java) |
| [KAN-22](https://haixuan.atlassian.net/browse/KAN-22) | Đăng nhập bằng email và Google | [LoginActivity.java](https://github.com/nguyenxuanhai-arch/App-food-odering/blob/c468b1f2753e7c0b7f625ae8c9d6ce4bba57b1e8/app/src/main/java/com/example/android_lab/ui/auth/LoginActivity.java) |

## Phạm vi đã đối chiếu

Ứng dụng gọi Firebase Authentication cho email và Google, đồng thời ghi thông tin người dùng.

Bằng chứng là mã đã tồn tại trên `master` tại commit gốc. Lần đối chiếu này xác nhận phạm vi triển khai trong mã. Trạng thái chạy trên Android cần bằng chứng kiểm thử riêng.
