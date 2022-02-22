import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import cartItems from "./data";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const increaseItem = (id, number) => {
    dispatch({ type: "INCREASE_ITEM", payload: id, guide: number });
  };

  const getTotal = () => {
    dispatch({ type: "GET_TOTAL" });
  };

  useEffect(() => {
    getTotal();
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, removeItem, increaseItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
