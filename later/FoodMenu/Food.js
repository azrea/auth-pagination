import React from "react";
import {
  FoodDescription,
  FoodImage,
  StyledFood,
  StyledFoodPrice,
  StyledFoodName,
} from "./styledFoodMenu";

const Food = ({ id, img, price, desc, title }) => {
  return (
    <StyledFood key={id}>
      <FoodImage src={img} />
      <StyledFoodName>{title}</StyledFoodName>
      <StyledFoodPrice>{price}</StyledFoodPrice>
      <FoodDescription>{desc}</FoodDescription>
    </StyledFood>
  );
};

export default Food;
