const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  "Trường Tiểu học": String,
  "Quận/Huyện": String,
  "Mã học sinh": String,
  Lớp: String,
  "Họ và tên": String,
  "Ngày sinh": Date,
  Giới: String,
  "Nơi sinh": String,
  "Dân tộc": String,
  "Hộ khẩu thường trú": String,
  "Điện thoại liên hệ": String,
  "Tổng điểm năm lớp 1": Number,
  "Tổng điểm năm lớp 2": Number,
  "Tổng điểm năm lớp 3": Number,
  "Tổng điểm năm lớp 4": Number,
  "Tổng điểm năm lớp 5": Number,
  "Tổng điểm kết quả 5 năm": Number,
  "Điểm ưu tiên": Number,
  "Tổng điểm sơ tuyển": Number,
});

module.exports = mongoose.model("Student", studentSchema);
