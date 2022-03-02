import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 1000px;
  width: 100%;
  height: 100vh;
  margin: auto;

  a {
    text-decoration: none;
    color: inherit;
    width: 60%;
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
`;

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
    margin: 2rem auto;

    button {
      width: 60%;
      background-color: lightblue;
      margin: auto 1rem;
      &:hover {
        background-color: blue;
        color: whitesmoke;
      }
    }
  }
`;

export const DashboardContainer = styled.div`
  .welcome {
    text-align: center;
  }
  .logoutBtn {
    background-color: #ff6961;
    display: block;
    margin: auto;

    &:hover {
      background-color: #ff2014;
    }
  }
`;

export const Alert = styled.div`
  position: absolute;
  width: 80%;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  font-size: 2rem;
  border-radius: 10px;
  background-color: red;
  font-weight: 700;
  color: black;
  text-align: center;
`;
