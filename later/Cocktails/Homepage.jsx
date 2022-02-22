import React from "react";
import CocktaiList from "./CocktaiList";
import SearchForm from "./SearchForm";

const Homepage = () => {
  return (
    <div>
      <SearchForm />
      <CocktaiList />
    </div>
  );
};

export default Homepage;
