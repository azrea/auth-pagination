import React, { useEffect, useState } from "react";
import { ProductsPageContainer } from "../components/StyledComponents";
import store from "../Redux/store";
import SinglePicture from "../components/SinglePicture";
import NavBar from "../components/NavBar";
import FilterList from "../components/FilterList";
import * as actions from "../Redux/actions";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const products = useSelector((state) => state.products.data);
  const categories = store.getState().products.categories;

  const highestPrice = store.getState().products.maxPrice;
  return (
    <div className="bgColorWhite">
      <NavBar />
      <ProductsPageContainer>
        <FilterList categories={categories} highestPrice={highestPrice} />

        <div className="productsList">
          {products.map((product) => {
            return <SinglePicture key={product.id} {...product} />;
          })}
        </div>
      </ProductsPageContainer>
    </div>
  );
};

export default ProductsPage;
