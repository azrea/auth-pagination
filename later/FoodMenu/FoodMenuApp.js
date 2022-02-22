import React from "react";
import FoodMenu from "./FoodMenu";
import { MainFoodContainer } from "./styledFoodMenu";

const FoodMenuApp = () => {
  return (
    <MainFoodContainer>
      <FoodMenu />
    </MainFoodContainer>
  );
};

export default FoodMenuApp;
