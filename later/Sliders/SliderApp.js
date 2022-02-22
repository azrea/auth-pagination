import React, { useEffect, useState } from "react";
import Sliders from "./Sliders";
import {
  StyledButtonLeft,
  StyledMainContainer,
  StyledReviewContainer,
  StyledTitle,
  StyledButtonRight,
} from "./styledSliders";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import data from "./data";

const SliderApp = ({}) => {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data);

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return (number = 0);
    }

    if (number < 0) {
      return (number = people.length - 1);
    } else return number;
  };

  const changePosition = (number) => {
    let newIndex = index + number;
    newIndex = checkNumber(newIndex);
    return setIndex(newIndex);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      changePosition(1);
    }, 10000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <StyledMainContainer>
      <StyledTitle>Reviews</StyledTitle>
      <StyledButtonLeft
        onClick={() => {
          changePosition(-1);
        }}
      >
        <FaChevronLeft style={{ fontSize: "1.2rem", textAlign: "center" }} />
      </StyledButtonLeft>
      <StyledButtonRight
        onClick={() => {
          changePosition(1);
        }}
      >
        <FaChevronRight style={{ fontSize: "1.2rem", textAlign: "center" }} />
      </StyledButtonRight>
      <StyledReviewContainer>
        <Sliders indexNum={index} people={people} />
      </StyledReviewContainer>
    </StyledMainContainer>
  );
};

export default SliderApp;
