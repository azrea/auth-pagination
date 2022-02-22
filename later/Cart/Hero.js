import React from "react";
import CartItem from "./CartItem";
import { HeroContainer, Button } from "./StyledCart";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { cart, ClearCart, total } = useGlobalContext();
  return (
    <HeroContainer>
      <h1>Your Bag</h1>

      <div className="cart-products">
        {cart.map((item) => {
          return <CartItem {...item} />;
        })}
      </div>

      <div className="total">
        <h3>Total</h3>
        <h3>${total}</h3>
      </div>

      <Button className="clear-btn" onClick={ClearCart}>
        Clear Cart
      </Button>
    </HeroContainer>
  );
};

export default Hero;
