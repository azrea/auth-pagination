import React from "react";
import { Link } from "react-router-dom";
import { NavbarContainer } from "./StyledCocktails";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="logo">
        <Link to="/" className="styledLink">
          <p className="logoLetters">
            <span className="uncoloured">The</span>
            <span className="coloured">Cocktail</span>
            <span className="uncoloured">DB</span>
          </p>
        </Link>
      </div>

      <div className="navLinks">
        <ul>
          <li>
            <Link to="/" className="styledLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="styledLink">
              About
            </Link>
          </li>
        </ul>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
