const express = require("express");
const {
  UploadStudentFile,
  FindStudentById,
  GetAllStudent,
  FindStudentByName,
} = require("../controller/student_controller");

const router = express.Router();

router.post("/upload", UploadStudentFile);
router.post("/student/id", FindStudentById);
router.get("/student", GetAllStudent);
router.post("/student/name", FindStudentByName);
module.exports = router;
