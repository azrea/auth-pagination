import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.bgColour};
`;

export const MainContainer = styled.section`
  background-color: ${(props) => props.theme.bgColour};
  color: ${(props) => props.theme.colour};
  min-height: 100vh;
  max-width: 900px;
  margin: auto;
  padding: 5rem 20px;

  header {
    display: flex;
    padding: 0.5rem;
  }

  h1 {
    font-size: 3rem;
  }

  button {
    padding: 10px 1.5rem;
    font-size: 1.5rem;
    border-radius: 7px;
    background-color: ${(props) => props.theme.obgColour};
    color: ${(props) => props.theme.ocolour};
  }

  main {
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
  }

  main h2 {
    color: ${(props) => props.theme.obgColour};
    text-align: center;
    font-size: 2.2rem;
  }

  .word {
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }

  .wordContainer {
    margin-bottom: 2rem;
  }

  .wordContainer p:first-letter {
    text-transform: capitalize;
  }
`;
