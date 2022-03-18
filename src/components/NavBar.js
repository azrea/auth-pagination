import React from "react";
import logoImg from "../images/logoImage.png";
import { StyledNav } from "./StyledComponents";

const NavBar = () => {
  return (
    <StyledNav>
      <div className="logoImg">
        <img src={logoImg} alt="Logo" />
      </div>
    </StyledNav>
  );
};

export default NavBar;
