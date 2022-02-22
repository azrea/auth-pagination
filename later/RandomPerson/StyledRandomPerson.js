import styled from "styled-components";

export const MainContainer = styled.section`
  position: relative;
  min-height: 100vh;

  .bluebg {
    background-color: #2660a4;
    height: 50vh;
  }
  .redbg {
    background-color: #ee4266;
    height: 50vh;
  }
`;

export const FormContainer = styled.div`
  display: grid;
  position: absolute;
  top: 20%;
  left: 50%;
  bottom: 20%;
  transform: translateX(-50%);
  background: white;
  width: 80%;
  min-height: 100px;
  border-radius: 10px;

  @media (max-width: 600px) {
    top: 15%;
    bottom: 15%;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    background-color: #c4cbca;
    top: 0;
    height: 100px;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: solid 2px #2660a4;
  }

  .information {
    width: 90%;
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
  }

  img {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%);
    border-radius: 50%;
    width: 160px;
    z-index: 2;
    border: solid 5px #2660a4;
    object-fit: cover;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    max-width: 100%;

    @media (max-width: 1200px) {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }

  p {
    margin-bottom: 1.7rem;
    font-size: 1.5rem;

    @media (max-width: 1200px) {
      margin-bottom: 1rem;
    }
  }

  .iconLine {
    width: 80%;
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    margin: 2rem auto;

    @media (max-width: 1200px) {
      font-size: 1.6rem;
      margin-bottom: 1rem auto;
    }
  }

  .icon {
    transition: all 0.3s ease-in;

    &:hover {
      color: #ee4266;
    }
  }

  button {
    padding: 5px 20px;
    border-radius: 5px;
    background-color: black;
    color: #ee4266;
    transition: all 0.3s ease-in;

    &:hover {
      background-color: #ee4266;
      color: black;
    }
  }
`;
