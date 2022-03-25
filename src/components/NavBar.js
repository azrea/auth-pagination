import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logoImg from "../images/logoImage.png";
import { StyledNav } from "./StyledComponents";
import { faBasketShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <StyledNav>
      <div className="logoImg">
        <img src={logoImg} alt="Logo" />
      </div>

      <ul>
        <li>
          <Link to="/" className="navLink">
            Home
          </Link>
        </li>
        <li>
          <h1>About</h1>
        </li>
        <li>
          <Link to="/products" className="navLink">
            Products
          </Link>
        </li>
      </ul>

      <div className="iconContainer">
        <div style={{ position: "relative" }}>
          <FontAwesomeIcon icon={faBasketShopping} className="icon basket" />
          <span className="basketNo">10</span>
        </div>
        <FontAwesomeIcon icon={faUser} className="icon user" />
      </div>
    </StyledNav>
  );
};

export default NavBar;
