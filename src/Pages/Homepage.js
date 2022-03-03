import React from "react";
import NavBar from "../components/NavBar";
import { StyledHomePage } from "../components/StyledComponents";

const Homepage = () => {
  return (
    <StyledHomePage>
      <NavBar />
      {/* 3 heroes with themes e.g movie pictures and games */}

      <div className="hero">chopin</div>
    </StyledHomePage>
  );
};

export default Homepage;
