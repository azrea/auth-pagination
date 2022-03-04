import React from "react";
import NavBar from "../components/NavBar";
import { StyledHomePage } from "../components/StyledComponents";

const Homepage = () => {
  return (
    <StyledHomePage>
      <NavBar />
      {/* 3 heroes with themes e.g movie pictures and games */}

      <div className="hero">
        <div className="flexHero">
          <span>
            <h2>Experience the Joy of gazing at the</h2>
            <h1>Night Sky Collection</h1>
            <h1>Named</h1>
            <h2>Only Price</h2>
          </span>
          <img src="" alt="Sample here" />
        </div>
      </div>
    </StyledHomePage>
  );
};

export default Homepage;
