import React from "react";
import ProductsFilter from "../components/Products/ProductsFilter";
import ProductsList from "../components/Products/ProductsList";
import { StyledProducts } from "../components/Products/StyledProducts";

const Products = () => {
  return (
    <StyledProducts>
      <h1 className="introduction">
        Here are our Marvellous Selection of Wallpaper pictures.
      </h1>

      <div className="mainContent">
        <ProductsFilter />
        <ProductsList />
      </div>
    </StyledProducts>
  );
};

export default Products;
