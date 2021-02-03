## Các lệnh NPM

Tại thư mục project, bạn có thể chạy lệnh:

### `npm start`

Để chạy ứng dụng ở chế độ development.
Mở [http://localhost:3001](http://localhost:3001) trên trình duyệt để xem kết quả.

### `npm run build`

Để build ứng dụng ở chế độ production vào thư mục `build`.<br />
React đã build được tối ưu cho chế độ production, các tập tin sẽ được nén và đặt tên kèm theo mã băm.


## Triển khai

### `docker-compose up --build`

Build và up container Docker

### Biến môi trường

Tập tin `.env` sẽ được sử dụng khi chạy `npm start`.<br />
Tập tin `.env.production` sẽ được sử dụng khi chạy `npm run build`.

Ý nghĩa các biến môi trường
```
REACT_APP_MOCK=false # Sử dụng dữ liệu mẫu thay vì gửi yêu cầu đến API
REACT_APP_APP_NAME=Example # Tên ứng dụng, hiển thị ở header ứng dụng
REACT_APP_APP_DOMAIN=http://localhost:3001 # Tên miền của ứng dụng web
REACT_APP_PRIVATE_DOMAIN_API=http://localhost:3000 # Tên miền API
REACT_APP_STORAGE_TYPE=local # local hoặc session storage
```