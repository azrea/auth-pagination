import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logoImg from "../images/logoImage.png";
import { StyledNav } from "./StyledComponents";
import { faBasketShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../Redux/store";

const NavBar = () => {
  const amount = useSelector((store) => store.products.cart.length);
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
          <Link to="/" className="navLink">
            About
          </Link>
        </li>
        <li>
          <Link to="/products" className="navLink">
            Products
          </Link>
        </li>
      </ul>

      <Link to="/cart" className="iconContainer">
        <div style={{ position: "relative" }}>
          <FontAwesomeIcon icon={faBasketShopping} className="icon basket" />
          <span className="basketNo">{amount}</span>
        </div>
        <FontAwesomeIcon icon={faUser} className="icon user" />
      </Link>
    </StyledNav>
  );
};

export default NavBar;
