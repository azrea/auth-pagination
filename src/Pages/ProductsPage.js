import React from "react";
import { ProductsPageContainer } from "../components/StyledComponents";
import store from "../Redux/store";
import SinglePicture from "../components/SinglePicture";
import NavBar from "../components/NavBar";
import FilterList from "../components/FilterList";

const ProductsPage = () => {
  const products = store.getState().products.data;
  return (
    <>
      <NavBar />
      <ProductsPageContainer>
        <FilterList />
        <div className="productsList">
          {products.map((product) => {
            return <SinglePicture key={product.id} {...product} />;
          })}
        </div>
      </ProductsPageContainer>
    </>
  );
};

export default ProductsPage;
