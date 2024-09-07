import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="nav-header">
      <div className="header-container">
        <img src="#logo" alt="company_logo" />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
