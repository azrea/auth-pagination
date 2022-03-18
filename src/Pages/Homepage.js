import React, { useEffect } from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import PictureGrid from "../components/PictureGrid";
import { StyledHomePage } from "../components/StyledComponents";

const Homepage = () => {
  return (
    <StyledHomePage>
      <NavBar />
      <Hero />
      <PictureGrid />
    </StyledHomePage>
  );
};

export default Homepage;
