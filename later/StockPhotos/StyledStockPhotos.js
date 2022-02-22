import styled from "styled-components";

export const MainContainer = styled.section`
  min-height: 100vh;
  max-width: 1000px;
  margin: auto;
`;

export const SearchbarContainer = styled.header`
  display: flex;
  width: 70%;
  input {
    width: 90%;
    padding: 5px;
    font-size: 1.5rem;
    border: none;
    border-bottom: 3px solid black;
    text-transform: capitalize;
  }

  button {
    margin: auto;
    font-size: 1.2rem;
    border: none;
    background-color: white;
    cursor: pointer;
  }
`;

export const BookList = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin: 5rem auto 2rem;
  column-gap: 10px;
  row-gap: 10px;
`;

export const BookContainer = styled.div`
  background-color: grey;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  transition: all 0.3s;
  img {
    width: 60%;
    height: 70%;
    object-fit: cover;
    margin: auto;
    margin-bottom: 1rem;
  }

  h1 {
    width: 100%;
    text-align: center;
  }

  &:hover {
    transform: scale(1.2);
    background-color: white;
  }

  h2 {
    text-align: center;
    font-size: 1rem;
    margin: 0.5rem;
  }
`;
