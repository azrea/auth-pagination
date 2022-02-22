import styled from "styled-components";

export const MainContainer = styled.section`
  padding: 1rem;
  min-height: 100vh;
  width: 100%;

  h1 {
    padding-top: 3rem;
    text-align: center;
    font-size: 3.2rem;
    margin-bottom: 3rem;
  }

  .pgBtnContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: auto;
    justify-content: space-between;
    border: solid 2px red;
    margin-bottom: 1rem;

    @media (min-width: 900px) {
      width: 80%;
    }

    @media (min-width: 100px) {
      width: 60%;
    }
  }

  .active {
    background-color: red;
  }

  .pgBtnContainer button {
    font-size: 1rem;
    border: none;
    padding: 0 7px;
    background-color: white;
    text-align: center;
    cursor: pointer;
    width: 100%;

    &:hover {
      background-color: red;
      transform: scale(1.5);
    }

    @media (min-width: 900px) {
      font-size: 1.5rem;
    }
  }
`;

export const Profilebox = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 20px;
  width: 300px;
  margin: 2rem auto;

  text-align: center;

  h2 {
    text-transform: capitalize;
    margin: 0.5rem;
  }

  a {
    text-decoration: none;
    border: solid 2px black;
    width: 50%;
    display: block;
    margin: 0 auto 1rem;
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 5px;
  }

  img {
    width: 100%;
    border-radius: 17px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
  }
`;
