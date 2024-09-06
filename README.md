1. Môi trường
- Nodejs 14.17.0

2. Cài đặt
- npm i

3. Cài đặt database
- Tạo database tên là video, colection là object1
- tạo file .env
  CONNECT_MONGODB = mongodb://localhost:27017/video

4. Chạy dự án
- npm start

5. Những thư viên đã dùng trong dự án
- "@babel/core", "@babel/node","@babel/preset-env": họ babel dùng để dịch mọi phiên bản js phù hợp với từng trình duyệt
- "body-parser": nhận dữ liệu request
- "dotenv": tạo tham số môi trường
- "ejs": tạo phần view cho nodejs, tư tượng như html
- "express": thư viện của nodejs
- "jsonwebtoken": dùng để bảo mật truy cập, tạo token, check token
- "lodash": kiểu tra mảng có rỗng hay không
- "mongoose": tạo collection mongodb, crud dữ liệu database, tạo index
- "nodemon": tự động khởi động lại web khi ctr+s
- "cookie-parser": tạo cookie phía giao diện
- "cors": cho phép truy cập từ những địa chỉ được phép
  

  
