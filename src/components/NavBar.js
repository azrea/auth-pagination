import React from "react";
import logoImg from "../images/logoImage.png";

const NavBar = () => {
  return (
    <nav>
      <div className="logoImg">
        <img src={logoImg} alt="Logo" />
      </div>

      <span className="welcomeMessage">
        <a href="">
          <h4>Hello</h4>
          <h1>Guest</h1>
        </a>

        <input type="text" className="searchBox" placeholder="Search here..." />
      </span>
    </nav>
  );
};

export default NavBar;
