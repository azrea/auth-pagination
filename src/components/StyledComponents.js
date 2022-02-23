import styled from "styled-components";

export const FormContainer = styled.div`
  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }

  input {
    width: 80%;
    margin: 1rem auto;
    font-size: 1.5rem;
    border: solid 2px black;
    border-radius: 7px;
    padding: 0.5rem;
  }

  button {
    width: 80%;
    padding: 0.5rem;
    margin: 1rem auto;
    border: solid 2px black;
    border-radius: 7px;
    background-color: lightgreen;
    font-size: 1.5rem;
    font-weight: 800;
    transition: all 0.3s ease;

    &:hover {
      background-color: green;
      color: whitesmoke;
    }
  }
  h1 {
    text-align: center;
    margin: auto;
    padding: 1rem;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%;
    font-size: 1.5rem;

    button {
      width: 60%;
      background-color: lightblue;

      &:hover {
        background-color: blue;
        color: whitesmoke;
      }
    }
  }
`;

export const MainContainer = styled.main`
  max-width: 1000px;
  width: 100%;
  height: 100vh;
  margin: auto;
`;
