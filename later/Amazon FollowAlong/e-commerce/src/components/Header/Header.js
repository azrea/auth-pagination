import React from "react";
import { StyledLink } from "../../StyledApp";
import "./Header.css";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

const Header = () => {
  const { amount } = useGlobalContext();

  return (
    <header>
      <StyledLink to="/" color="black">
        <h1 className="header__logo">
          <span className="header__logo--blue">Car</span>
          <span className="header__logo--purple">dBoa</span>
          <span className="header__logo--green">rd F</span>
          <span className="header__logo--orange">actory</span>
        </h1>
      </StyledLink>

      <div className="header__greeting">
        <StyledLink to="/" color="var(--blue)">
          <span className="header__greeting--normal">Hello</span>
          <h2>Guest</h2>
        </StyledLink>
      </div>

      <Link to="/cart">
        <button className="toggleBtn">
          <ShoppingBasket />
          <p>{amount}</p>
        </button>
      </Link>
    </header>
  );
};

export default Header;
