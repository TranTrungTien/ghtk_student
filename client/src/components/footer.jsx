import React from "react";
import "./style.css";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className="column">
        <div className="row">
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>

        <div className="row">
          <ul>
            <li>
              <a href="/">Contact us</a>
            </li>
            <li>
              <a href="/">Our Services</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            <li>
              <a href="/">Career</a>
            </li>
          </ul>
        </div>

        <div className="row">Copyright © 2021 - All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
