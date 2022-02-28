import React, { useContext, useState, useEffect, useReducer } from "react";
import information from "../data";
import reducer from "../reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    total: 0,
    cart: information,
    amount: 0,
  };

  const [data] = useState(information);

  const [filters, setFilters] = useState({
    name: "",
    price: 1000,
    freeShipping: false,
    category: "",
  });
  const [recent, setRecent] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (recent.length > 5) {
      setRecent((prev) => {
        return prev.filter((_, index) => {
          if (index !== 0) {
            return true;
          }
          return false;
        });
      });
    }
  }, [recent]);

  const getTotal = () => {
    dispatch({ type: "GET_TOTAL" });
  };

  useEffect(() => {
    getTotal();
  }, [state.cart]);

  const filteredData = data.filter((item) => {
    if (item.price < filters.price)
      if (item.category === filters.category || filters.category === "")
        if (item.freeShipping === true || filters.freeShipping === false)
          if (
            item.name.toLowerCase().includes(filters.name) ||
            filters.name === ""
          )
            return true;
          else {
            return false;
          }
  });

  const filterCategory = (category) => {
    setFilters({ ...filters, category: category });
  };

  const filterPrice = (price) => {
    setFilters({ ...filters, price: price });
  };

  const checkShipping = (bool) => {
    setFilters({ ...filters, freeShipping: bool });
  };

  const clearFilter = () => {
    setFilters({
      name: "",
      price: 1000,
      freeShipping: false,
      category: "",
    });
  };

  const filterName = (searchValue) => {
    setFilters({
      ...filters,
      name: searchValue,
    });
  };

  const addToCart = (id, guide) => {
    dispatch({ type: "ADD_TO_CART", payload: id, guide: guide });
  };

  const payForItems = () => {
    dispatch({ type: "PAY_FOR_ITEMS" });
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setRecent,
        recent,
        filteredData,
        filterName,
        filterPrice,
        checkShipping,
        filterCategory,
        clearFilter,
        getTotal,
        addToCart,
        ...state,
        payForItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
