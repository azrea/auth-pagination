import React from "react";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "./Context";
import Loading from "./Loading";
import { CocktailsContainer } from "./StyledCocktails";

const CocktaiList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 style={sectionTitle}>No Cocktails matched your search criteria</h2>
    );
  }

  return (
    <CocktailsContainer>
      {cocktails.map((cocktail) => {
        return <Cocktail key={cocktail.id} {...cocktail} />;
      })}
    </CocktailsContainer>
  );
};

const sectionTitle = {
  color: "#eafdf8",
  fontSize: "2.5rem",
  textAlign: "center",
  paddingTop: "20vh",
};

export default CocktaiList;
