import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import { StyledHomePage } from "../components/StyledComponents";
import * as actions from "../Redux/actions";

const Homepage = () => {
  return (
    <StyledHomePage>
      <NavBar />
      {/* 3 heroes with themes e.g movie pictures and games */}
      <Hero />
    </StyledHomePage>
  );
};

export default Homepage;
