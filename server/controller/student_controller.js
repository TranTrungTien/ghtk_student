const Busboy = require("busboy");
const fs = require("fs");
const Excel = require("read-excel-file/node");
const mongoose = require("mongoose");
const Student = require("../models/student_model");

const UploadStudentFile = (req, res) => {
  const bb = Busboy({ headers: req.headers });
  bb.on("file", (name, fileStream, info) => {
    const { filename, encoding, mimeType } = info;

    Excel(fileStream)
      .then((data) => {
        console.log({ data });
        const studentList = [];
        Array.isArray(data) &&
          data.forEach((s, index) => {
            if (index > 4) {
              studentList.push(
                new Student({
                  id: index,
                  "Trường Tiểu học": s[1],
                  "Quận/Huyện": s[2],
                  "Mã học sinh": s[3],
                  Lớp: s[4],
                  "Họ và tên": s[5],
                  "Ngày sinh": new Date(s[8], s[7], s[6]),
                  Giới: s[9],
                  "Nơi sinh": s[10],
                  "Dân tộc": s[11],
                  "Hộ khẩu thường trú": s[12],
                  "Điện thoại liên hệ": s[13],
                  "Tổng điểm năm lớp 1": Number(s[14]),
                  "Tổng điểm năm lớp 2": Number(s[15]),
                  "Tổng điểm năm lớp 3": Number(s[16]),
                  "Tổng điểm năm lớp 4": Number(s[17]),
                  "Tổng điểm năm lớp 5": Number(s[18]),
                  "Tổng điểm kết quả 5 năm": Number(s[19]),
                  "Điểm ưu tiên": Number(s[20]),
                  "Tổng điểm sơ tuyển": Number(s[21]),
                })
              );
            }
          });
        console.log({ studentList });
        Student.insertMany(studentList).catch((err) => {
          throw err;
        });
      })
      .catch((err) => {
        throw err;
      });

    fileStream.pipe(fs.createWriteStream("./" + filename));
    fileStream.on("end", () => console.log("end"));
  });
  bb.on("field", (name, val, info) => {
    console.log(`Field [${name}]: value: %j`, val);
  });
  bb.on("close", () => {
    console.log("Done parsing form!");
    res.status(201).send(true);
  });
  bb.on("error", (err) => {
    console.log({ err });
    res.status(500).send(false);
  });
  req.pipe(bb);
};

const FindStudentById = (req, res) => {
  const { id } = req.body;
  if (id) {
    Student.findOne({ "Mã học sinh": id }, null, null, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  } else {
    res.status(400).send({ err: "id options needed !!!" });
  }
};

const FindStudentByName = (req, res) => {
  const { name } = req.body;
  if (name) {
    Student.find(
      { "Họ và tên": { $regex: name, $options: "i" } },
      null,
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(result);
        }
      }
    );
  } else {
    res.status(400).send({ err: "name option needed !!!" });
  }
};

const GetAllStudent = (req, res) => {
  Student.find((err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

module.exports = {
  UploadStudentFile,
  GetAllStudent,
  FindStudentById,
  FindStudentByName,
};
