import React from "react";
import { Link } from "react-router-dom";
import { CocktailContainer } from "./StyledCocktails";

const Cocktail = ({ image, name, id, info }) => {
  return (
    <CocktailContainer key={id}>
      <img src={image} alt="Cocktail" />
      <p>
        <span>{name}</span>
        <span>{info}</span>
        <button>
          <Link to={`/cocktail/${id}`} style={{ color: "inherit" }}>
            Details
          </Link>
        </button>
      </p>
    </CocktailContainer>
  );
};

export default Cocktail;
