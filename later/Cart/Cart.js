import React from "react";
import { MainContainer } from "./StyledCart";
import Header from "./Header";
import Hero from "./Hero";
import Loading from "./Loading";
import { useGlobalContext } from "./context";

const Cart = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  } else {
    return (
      <MainContainer>
        <Header />
        <Hero />
      </MainContainer>
    );
  }
};

export default Cart;
