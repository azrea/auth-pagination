import React, { useEffect } from "react";
import CartItem from "../components/Cart/CartItem";
import { StyledContainer } from "../components/Cart/StyledCart";
import { useGlobalContext } from "../components/Context";

const CartPage = () => {
  const { cart, total, amount, payForItems } = useGlobalContext();

  useEffect(() => {}, [cart]);
  return (
    <StyledContainer>
      <h1 className="title">Shopping Cart ({amount} items)</h1>

      <div className="productsContainer">
        {cart.map((item) => {
          if (item.amount > 0) {
            return <CartItem key={item.id} {...item} />;
          }
          return null;
        })}

        <div className="total">
          <h2>Total</h2>
          <h2>£{total}</h2>
        </div>

        <button className="payBtn" onClick={payForItems}>
          Pay now
        </button>
      </div>
    </StyledContainer>
  );
};

export default CartPage;
