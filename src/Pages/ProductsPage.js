import React from "react";
import { ProductsPageContainer } from "../components/StyledComponents";
import store from "../Redux/store";
import SinglePicture from "../components/SinglePicture";
import NavBar from "../components/NavBar";

const ProductsPage = () => {
  const products = store.getState().products.data;

  return (
    <>
      <NavBar />
      <ProductsPageContainer>
        <div className="conditions"></div>

        <div className="productsList">
          {products.map((product) => {
            return <SinglePicture {...product} />;
          })}
        </div>
      </ProductsPageContainer>
    </>
  );
};

export default ProductsPage;
