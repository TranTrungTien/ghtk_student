import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import StudentList from "./student_list";
import "./style.css";

const View = () => {
  const [studentList, setStudentList] = useState(null);
  console.log(studentList);
  useEffect(() => {
    axios
      .get("http://localhost:3001/student", {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((list) => {
        setStudentList(list.data);
      })
      .catch((err) => console.log({ err }));
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target?.name?.value);
    console.log(e.target?.id?.value);
    if (e.target?.id?.value) {
      axios
        .post(
          "http://localhost:3001/student/id",
          { id: e.target?.id?.value },
          {
            headers: {
              "content-type": "application/json",
            },
          }
        )
        .then((list) => {
          setStudentList([list.data]);
          alert("Successfully !!!!");
        })
        .catch((err) => console.log({ err }));
    } else if (e.target?.name?.value) {
      axios
        .post(
          "http://localhost:3001/student/name",
          { name: e.target?.name?.value },
          {
            headers: {
              "content-type": "application/json",
            },
          }
        )
        .then((list) => {
          setStudentList(list.data);
          alert("Successfully !!!!");
        })
        .catch((err) => alert("Something went wrong !!!!"));
    } else {
      axios
        .get("http://localhost:3001/student", {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((list) => {
          setStudentList(list.data);
        })
        .catch((err) => console.log({ err }));
    }
  };
  return (
    <div className="view-container">
      <h1>Tra Cứu Thông Tin Tuyển Sinh</h1>
      <form onSubmit={onSubmit} className="form">
        <div className="row">
          <label htmlFor="name">Họ Tên</label>
          <input placeholder="Nhap Ho Ten " type="text" name="name" id="name" />
        </div>
        <div className="row">
          <label htmlFor="id">Mã Học Sinh</label>
          <input placeholder="Nhap Ma" type="text" name="id" id="id" />
        </div>
        <button type="submit">Tìm kiếm</button>
      </form>
      {studentList?.length > 0 && <StudentList studentList={studentList} />}
    </div>
  );
};

export default View;
