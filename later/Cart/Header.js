import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { StyledHeader } from "./StyledCart";

const Header = () => {
  const { amount } = useGlobalContext();
  return (
    <StyledHeader>
      <div>
        <h1>AttellSoft</h1>

        <p>
          <FaShoppingBag className="shoppingBag" />
          <div className="cart-items-number">{amount}</div>
        </p>
      </div>
    </StyledHeader>
  );
};

export default Header;
