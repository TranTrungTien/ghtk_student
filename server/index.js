const express = require("express");
const studentRoute = require("./routers/student_route");
const cors = require("cors");
const mongoose = require("mongoose");

const DBConnect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(
      "mongodb+srv://trantrungtien:Matkhau12345@cluster0.mlapa.mongodb.net/students_ghtk?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true },
      (error) => {
        if (error) {
          console.log({ error });
          reject(false);
        } else {
          console.log("Connect to MongoDb Successfully");
          resolve(true);
        }
      }
    );
  });
};

DBConnect()
  .then((isConnected) => {
    console.log({ isConnected });
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/", studentRoute);

    app.listen(3001, () => console.log("server is running on port 3001"));
  })
  .catch((err) => {
    console.log({ err });
    process.exit(-1);
  });
