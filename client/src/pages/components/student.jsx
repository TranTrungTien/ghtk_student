import React from "react";
import "./style.css";

const Student = ({ student, keys, index }) => {
  return (
    <div className="student-data-container">
      <ul className="">
        {keys.map((key, idx) => {
          return key === "id" ? (
            <li key={idx} className="column-item">
              {index}
            </li>
          ) : (
            <li key={idx} className="column-item">
              {student[key]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Student;
