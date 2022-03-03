import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => useContext(AppContext);

export { AppProvider, AppContext };
