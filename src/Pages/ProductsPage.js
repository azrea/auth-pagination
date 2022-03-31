import React from "react";
import { ProductsPageContainer } from "../components/StyledComponents";
import store from "../Redux/store";
import SinglePicture from "../components/SinglePicture";
import NavBar from "../components/NavBar";

const ProductsPage = () => {
  const products = store.getState().products.data;

  console.log(products.length);
  return (
    <>
      <NavBar />
      <ProductsPageContainer>
        <div className="conditions"></div>
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
