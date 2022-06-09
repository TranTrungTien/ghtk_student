import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import axios from "axios";

const Import = () => {
  const [file, setFile] = useState(null);
  const onChange = (e) => {
    setFile(e.target.files[0]);
  };
  const submitFile = async () => {
    const formData = new FormData();
    formData.append("student_data", file, file?.name);
    await axios
      .post("http://localhost:3001/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then(() => alert("Successfully !!!!"))
      .catch(() => alert("Something went wrong !!!!"));
  };
  return (
    <main className="main">
      <h1>Tra Cứu Thông Tin Tuyển Sinh</h1>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className="wrapper-import">
        <div className="label-import">
          <label htmlFor="file">
            <span>{file ? file?.name : "Click to import xlsx"} </span>
            <input
              type="file"
              name="file"
              id="file"
              className="file"
              onChange={onChange}
            />
          </label>
        </div>
        <button className="btn" onClick={submitFile}>
          Import
        </button>
      </div>
    </main>
  );
};

export default Import;
