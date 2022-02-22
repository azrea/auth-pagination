import React from "react";
import { StyledCategoryButton, StyledNav } from "./styledFoodMenu";

const Categories = ({ categories, filterItems }) => {
  return (
    <>
      <StyledNav>
        {categories.map((category, index) => {
          return (
            <StyledCategoryButton
              key={index}
              onClick={() => {
                filterItems(category);
              }}
            >
              {category}
            </StyledCategoryButton>
          );
        })}
      </StyledNav>
    </>
  );
};

export default Categories;
