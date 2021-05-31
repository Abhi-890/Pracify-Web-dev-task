import React from "react";
import logo from "./Group 220.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img className="logo" src={logo} alt="" />
            <h1 className="text">organic</h1>
          </div>
          <ul className="nav-items">
            <li className="nav-item">Home</li>
            <li className="nav-item">Products</li>
            <li className="nav-item">Blog</li>
            <li className="nav-item">About Us</li>
            <li className="nav-item">
              <button className="nav-button">Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
