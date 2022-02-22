import React from "react";
import Cart from "./Cart";
import { AppContext, AppProvider } from "./context";

const CartIndex = () => {
  return (
    <AppProvider>
      <Cart />
    </AppProvider>
  );
};

export default CartIndex;
