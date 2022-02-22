import React from "react";
import Cocktails from "./Cocktails";
import { AppProvider } from "./Context";

const CocktailsIndex = () => {
  return (
    <AppProvider>
      <Cocktails />
    </AppProvider>
  );
};

export default CocktailsIndex;
