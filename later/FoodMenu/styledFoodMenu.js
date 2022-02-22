import styled from "styled-components";

export const MainFoodContainer = styled.section`
  display: block;
  padding: 20px 20px;
  max-width: 1000px;
  margin: auto;
  height: 100vh;
  overflow-y: scroll;
  background-color: #386641;
  color: #d9e5d6;
`;

export const FoodContainer = styled.div`
  width: 100%;
  margin: auto;
`;

export const StyledFoodPrice = styled.h3`
  margin: 5px 0;
`;

export const FoodGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 5rem;
  row-gap: 3rem;
`;

export const StyledFood = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 10px;
  font-size: 1rem;
`;

export const FoodImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin: 10px 0;
  border: solid 3px black;
`;

export const StyledFoodName = styled.h2`
  font-size: 1.7rem;
  text-align: center;
  text-transform: capitalize;
`;

export const FoodDescription = styled.span`
  width: 90%;
`;

export const StyledFoodLogo = styled.h1`
  font-size: 2rem;
  border: solid 2px black;
  color: black;
  background-color: #ffb30f;
  width: 8rem;
  padding: 2px 10px;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const StyledCategoryButton = styled.button`
  padding: 5px 20px;
  margin: 30px 0;
  background-color: #ffb30f;
  font-size: 1.5rem;
  border-radius: 5px;
  text-transform: capitalize;
  cursor: pointer;
`;
