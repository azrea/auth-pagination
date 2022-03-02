import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledHero } from "./StyledComponents";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
  const [show, setShow] = useState(3);

  useEffect(() => {
    setShow(1);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      let int = 1;
      slideMove(int);
    }, 5000);

    return () => clearInterval(slideInterval);
  });

  function slideMove(number) {
    let val = show + number;
    if (val < 1) {
      val = 3;
    }
    if (val > 3) {
      val = 1;
    }
    setShow(val);
  }

  return <StyledHero></StyledHero>;
};

export default Hero;
