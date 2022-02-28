import React from "react";

import { ArrowUpward, ArrowDownward } from "@material-ui/icons";
import { useGlobalContext } from "../Context";

const CartItem = ({ url, name, price, id, amount }) => {
  const { addToCart } = useGlobalContext();
  return (
    <div className="itemContainer">
      <img src={url} alt="thumbnail" />
      <div className="flex-col">
        <h2>{name}</h2>
        <h3>£{price}</h3>
      </div>
      <div className="iconBtns">
        <ArrowUpward onClick={() => addToCart(Number(id), +1)} />
        <h4>{amount}</h4>
        <ArrowDownward onClick={() => addToCart(Number(id), -1)} />
      </div>
    </div>
  );
};

export default CartItem;
