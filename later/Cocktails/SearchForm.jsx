import React, { useRef } from "react";
import { useGlobalContext } from "./Context";
import { SearchFormContainer } from "./StyledCocktails";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const updateSearchForm = () => {
    setSearchTerm(searchBox.current.value);
    console.log(searchBox.current.value);
  };

  const searchBox = useRef("");
  return (
    <SearchFormContainer>
      <h2>Search up a cocktail...</h2>

      <input type="text" ref={searchBox} onChange={updateSearchForm} />
    </SearchFormContainer>
  );
};

export default SearchForm;
