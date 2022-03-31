import styled from "styled-components";
import { keyframes } from "styled-components";

const black = "#1e152a";
const red = "#fc60a8";
const blue = "#5ab1bb";
const white = "#faf3dd";
const green = "#0c8346";
const yellow = "#f7dd72";

const intro = keyframes`
0%{opacity:0};
40%{opacity:1 };
100%{opacity:0 };`;

export const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  margin: auto;

  a {
    text-decoration: none;
    color: inherit;
    width: 60%;
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
    border: solid 2px ${black};
    border-radius: 7px;
    padding: 0.5rem;
  }

  button {
    width: 80%;
    padding: 0.5rem;
    margin: 1rem auto;
    border: solid 2px ${black};
    border-radius: 7px;
    background-color: lightgreen;
    font-size: 1.5rem;
    font-weight: 800;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${green};
      color: ${white};
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
    margin: 2rem auto;

    button {
      width: 60%;
      background-color: lightblue;
      margin: auto 1rem;
      &:hover {
        background-color: blue;
        color: ${white};
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
  color: ${black};
  text-align: center;
`;

export const StyledHomePage = styled.main`
  span {
    width: 100%;
    margin: 0 auto;
    align-self: flex-start;
    font-size: 1em;
    text-align: center;
  }
`;

export const MovieContainer = styled.div``;

export const StyledNav = styled.nav`
  position: fixed;
  z-index: 50;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${black};
  color: ${blue};

  .logoImg {
    padding: 5px 1em 0;
    width: 20%;
    object-fit: contain;
    height: min-content;
    align-self: center;

    img {
      height: 100px;
      align-self: center;
    }
  }

  ul {
    width: 50%;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    justify-self: center;
  }

  .iconContainer {
    width: 20%;
    font-size: 2rem;
    display: flex;
    justify-content: flex-end;

    .icon {
      margin: 1.5rem;
    }

    .basketNo {
      position: absolute;
      font-size: 1rem;
      width: 25px;
      height: 25px;
      text-align: center;
      top: 16px;
      left: 45px;
      border-radius: 50%;
      background-color: ${white};
      color: ${black};
    }
  }

  .navLink {
    font-size: 1.5rem;
    font-weight: 750;
  }

  ul > *,
  .iconContainer > * {
    transition: all 0.3s;
    cursor: pointer;
  }
  ul > *:hover,
  .iconContainer > *: hover {
    transform: scale(1.25);
  }
`;

export const StyledHero = styled.div`
  z-index: 1;
  color: ${white};
  position: absolute;
  top: ${(props) => props.positionStart || 0};
  background-image: ${(props) =>
    props.primary
      ? `linear-gradient(${blue}, ${black})`
      : `linear-gradient(${black}, ${red})`};
  min-height: 100vh;
  width: 100%;
  padding: 165px;
  display: flex;
  // justify-content: center;}

  img {
    width: 50%;
    border-radius: 7px;
    border: solid 2px ${black};
    margin: 0 5px;
  }

  .flexHero {
    z-index: 2;
    position: absolute;
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
    transition: all 1s ease-in-out;
    animation-name: ${intro};
    animation-duration: 10s;
  }

  span {
    line-height: 1.4;
    font-size: 1.2rem;
    h1 {
      color: ${black};
    }
  }
`;

export const StyledPictureGrid = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  z-index: 10;
  top: 60%;

  padding: 1rem;

  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
`;

export const SinglePictureContainer = styled.div`
  &.singlePicture {
    width: 24%;
    background-size: cover;
    background-position: center;
    height: 300px;
    border-radius: 7px;
    // border: ${white} solid 2px;
    display: flex;
    transition: 0.3s all;
    text-align: center;

    .text {
      display: flex;
      opacity: 0;
      transition: 0.3s all;
      font-size: 1.2vw;
      width: 100%;
      background-color: ${white};
      height: 300px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 7px;
    }

    &:hover .text {
      opacity: 1;
    }
  }
`;

export const StyledPicturePage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: linear-gradient(${black}, ${white});

  .container {
    max-height: 70vh;
    position: relative;
    &:hover .overlay {
      opacity: 1;
    }
    &:hover .title {
      opacity: 1;
    }

    img {
      width: 100%;
      max-height: 70vh;
      object-fit: contain;
      border: solid 2px ${white};
      border-radius: 10px;
    }

    .title {
      z-index: 4;
      background-color: ${white};
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      text-align: center;
      padding: 0.5rem;
      transition: all 0.3s ease;
      opacity: 0;
      font-size: 1.1rem;

      h1 {
        margin: 0.25rem auto;
      }
    }

    .overlay {
      position: absolute;
      background-color: ${black};
      top: 6px;
      z-index: 3;
      height: 100%;
      width: 100%;
      border-radius: 10px;
      transition: all 0.5s ease;
      opacity: 0;
    }

    .ctaButtons {
      position: absolute;
      top: 53%;
      left: 50%;
      transform: translateX(-50%);

      .icon {
        font-size: 2.5rem;
        margin: auto 0.5rem;
        cursor: pointer;
        color: ${white};
      }
    }
  }
`;

export const ProductsPageContainer = styled.div`
  padding-top: 7.3rem;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${white};

  .conditions {
    width: 25%;
    margin: 1px 1rem;
    min-height: 100px;
  }

  .productsList {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    margin: auto 3px auto 1rem;
    gap: 2px;
  }

  .singlePicture {
    width: 33%;
  }
`;
