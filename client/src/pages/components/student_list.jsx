import Student from "./student";
import "./style.css";

const column = [
  "id",
  "Trường Tiểu học",
  "Quận/Huyện",
  "Mã học sinh",
  "Lớp",
  "Họ và tên",
  "Ngày sinh",
  "Giới",
  "Nơi sinh",
  "Dân tộc",
  "Hộ khẩu thường trú",
  "Điện thoại liên hệ",
  "Tổng điểm năm lớp 1",
  "Tổng điểm năm lớp 2",
  "Tổng điểm năm lớp 3",
  "Tổng điểm năm lớp 4",
  "Tổng điểm năm lớp 5",
  "Tổng điểm kết quả 5 năm",
  "Điểm ưu tiên",
  "Tổng điểm sơ tuyển",
];

const StudentList = ({ studentList }) => {
  return (
    <div className="column-list">
      <ul className="">
        {column.map((item, index) => {
          return (
            <li className="column-item" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
      <ul>
        {Array.isArray(studentList) ? (
          studentList.map((item, index) => {
            return (
              <Student
                key={index}
                student={item}
                keys={column}
                index={index + 1}
              />
            );
          })
        ) : (
          <Student student={studentList} keys={column} index={1} />
        )}
      </ul>
    </div>
  );
};

export default StudentList;
