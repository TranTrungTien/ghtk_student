import React from "react";
import "./style.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul className="header-nav">
          <li className="">
            <NavLink to="/">Import Data</NavLink>
          </li>
          <li>
            <NavLink to="/views">View Data</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
