import React from "react";
import { useParams } from "react-router";
import { useGlobalContext } from "../components/Context";
import { StyledSingleProduct } from "../components/Products/StyledProducts";

const SingleProductPage = () => {
  const { id } = useParams();

  const { data, addToCart } = useGlobalContext();

  const dataPiece = data.find((item) => {
    return item.id === Number(id);
  });

  return (
    <StyledSingleProduct>
      <div className="introduction">
        <h2>From our Prestigious {dataPiece.category} collection...</h2>
        <h2>We are proud to introduce...</h2>
      </div>
      <h1>{dataPiece.name}</h1>

      <img src={dataPiece.url} alt="" />

      <button className="cartBtn" onClick={() => addToCart(Number(id), +1)}>
        Add to Cart
      </button>
    </StyledSingleProduct>
  );
};

export default SingleProductPage;
