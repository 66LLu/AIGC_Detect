const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();

// 使用 CORS 中间件处理预检请求
app.use(cors());

// 设置 Multer 的存储选项
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    // 将文件存储在服务器的 "uploads" 目录中
    cb(null, 'video');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/video', upload.array('filepond'), (req, res) => {
  res.send('文件上传成功！');
});

app.listen(3000, () => console.log('服务器正在监听 3000 端口...'));
