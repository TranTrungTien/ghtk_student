import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Import from "./components/import";
import "./style.css";

const ImportData = () => {
  return (
    <div className="import-data">
      <Header />
      <Import />
      <Footer />
    </div>
  );
};

export default ImportData;
