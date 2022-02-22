import { React, useState } from "react";
import { FoodContainer, FoodGrid, StyledFoodLogo } from "./styledFoodMenu";
import Food from "./Food";
import items from "./data";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const FoodMenu = () => {
  const [menuItems, setMenuItems] = useState(items);

  const [category, setCategory] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);

    setMenuItems(newItems);
  };

  return (
    <FoodContainer>
      <StyledFoodLogo>David's</StyledFoodLogo>
      <Categories categories={category} filterItems={filterItems} />
      <FoodGrid>
        {menuItems.map((menuItem) => {
          const { id, title, price, img, desc } = menuItem;
          return (
            <Food id={id} price={price} img={img} desc={desc} title={title} />
          );
        })}
      </FoodGrid>
    </FoodContainer>
  );
};

export default FoodMenu;
