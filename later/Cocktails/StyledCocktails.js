import styled from "styled-components";

export const MainContainer = styled.section`
  min-height: 100vh;
  background-color: #002626;
  color: #eafdf8;
`;

export const NavbarContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 30px 10px;
  border-bottom: solid 5px #ffba08;
  background-color: #002626;
  z-index: 10;

  .logoLetters {
    font-size: 2rem;
    font-weight: 1000;
  }

  .coloured {
    color: #ffba08;
    transition: all 0.3s ease-in;
    &:hover {
      font-size: 2.1rem;
    }
  }

  .uncoloured {
    color: #eafdf8;
  }

  ul {
    list-style-type: none;
    display: flex;
    font-size: 1.5rem;
  }

  li {
    margin: 0 20px;
  }

  .styledLink {
    color: #eafdf8;
    transition: all 0.3s ease-in;

    &:hover {
      color: #ffba08;
      font-size: 1.6rem;
    }
  }
`;

export const AboutUsContainer = styled.section`
  text-align: center;
  margin: 20vh auto;

  h1 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  p {
    font-size: 1.5rem;
    width: 60%;
    margin: auto;
  }
`;

export const ErrorContainer = styled.section`
  text-align: center;
  font-size: 4rem;
  margin: 40vh auto;

  button {
    padding: 5px 20px;
    font-size: 2rem;
    background-color: #eafdf8;
    color: #002626;
    transition: all 0.3s ease-in;

    &:hover {
      background-color: #ffba08;
    }
  }
`;

export const Btn = styled.button`
  padding: 5px 20px;
  font-size: 2rem;
  background-color: #eafdf8;
  color: #002626;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: #ffba08;
  }
`;

export const LoadingContainer = styled.div`
  h1 {
    padding-top: 20vh;
    text-align: center;
    font-size: 3rem;
  }
`;

export const SearchFormContainer = styled.div`
  min-height: 100px;
  background-color: #eafdf8;
  width: 80%;
  display: block;
  margin: 20vh auto 10vh;

  h2 {
    color: #002626;
    text-align: center;
    padding: 10px 0;
  }

  input {
    width: 90%;
    display: block;
    margin: auto;
    padding: 5px;
  }
`;

export const CocktailsContainer = styled.div`
  display: grid;
  width: 100%;

  margin: auto;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

export const CocktailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  width: 65%;

  img {
    width: 100%;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  p {
    background-color: #eafdf8;
    width: 100%;
    color: #002626;
    text-align: left;
    font-size: 1.5rem;
    padding: 1rem;
  }

  span {
    display: block;
    margin: 0.25rem;
  }
  button {
    padding: 5px 20px;
    background-color: #002626;
    color: #ffba08;
    font-weight: 700;
    border-radius: 20px;
    cursor: pointer;
  }
`;

export const SingleContainer = styled.div`
  max-width: 1000px;
  max-height: fit-content;
  width: 600px;
  margin: auto;
  margin-top: 5vh;
  border-radius: 10px;
  display: grid;
  justify-items: center;
  color: #002626;
  background-color: #eafdf8;
  img {
    width: 500px;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 0.25rem;
    width: 400px;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
    padding: 10px;
  }
`;
