import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "./Loading";
import { SingleContainer } from "./StyledCocktails";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);

    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2>No cocktails here...Go back home.</h2>;
  } else {
    const { name, image, info, category, glass, instructions, ingredients } =
      cocktail;
    return (
      <SingleContainer>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>{info}</p>
        <p>{category}</p>
        <p>{glass}</p>
        <p>
          <span>Instructions: </span>
          {instructions}
        </p>
        {ingredients.map((ingredient, index) => {
          return (
            <p>
              <span key={index}>{ingredient}</span>
            </p>
          );
        })}
      </SingleContainer>
    );
  }
};

export default SingleCocktail;
