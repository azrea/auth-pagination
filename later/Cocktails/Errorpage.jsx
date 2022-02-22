import React from "react";
import { Link } from "react-router-dom";
import { ErrorContainer } from "./StyledCocktails";

const Errorpage = () => {
  return (
    <ErrorContainer>
      <h1> Error Error Error...</h1>
      <button>
        <Link to="/">Back Home</Link>
      </button>
    </ErrorContainer>
  );
};

export default Errorpage;
