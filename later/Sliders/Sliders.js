import React from "react";
import {
  StyledImage,
  StyledName,
  StyledQuote,
  StyledSlider,
  StyledReviewTitle,
} from "./styledSliders";

const Sliders = ({ indexNum, people }) => {
  const index = indexNum;

  console.log(index);

  return (
    <>
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;

        let position = "nextSlide";

        if (personIndex === index) {
          position = "activeSlide";
        }

        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <StyledSlider className={position} key={id}>
            <StyledImage src={image} alt={name} />
            <StyledName>{name}</StyledName>
            <StyledReviewTitle>{title}</StyledReviewTitle>
            <StyledQuote>{quote}</StyledQuote>
          </StyledSlider>
        );
      })}
    </>
  );
};

export default Sliders;
