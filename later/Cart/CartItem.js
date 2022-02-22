import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Button, CartItemContainer } from "./StyledCart";
import { useGlobalContext } from "./context";

const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, increaseItem } = useGlobalContext();
  return (
    <CartItemContainer>
      <img src={img} alt="Image here" />
      <div className="info-grid">
        <h3>{title}</h3>
        <p>${price}</p>
        <Button className="bareBtn" onClick={() => removeItem(id)}>
          <p className="bareBtn"> remove</p>
        </Button>
      </div>
      <div className="increment-grid">
        <Button onClick={() => increaseItem(id, 1)}>
          <FaAngleUp className="angleIcon" />
        </Button>

        <p style={{ fontSize: "1.3rem" }}>{amount}</p>

        <Button onClick={() => increaseItem(id, -1)}>
          <FaAngleDown className="angleIcon" />
        </Button>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
