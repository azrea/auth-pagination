import styled from "styled-components";

const black = "#0A0908";
const yellow = "#E7E247";
const white = "#F3EFF5";
const green = "#3F7D20";
const pink = "#E05263";

export const TaskListContainer = styled.main`
  height: 100vh;
  width: 100%;
  position: relative;
  color: ${white};
  background-color: ${black};
`;

export const SignupContainer = styled.div`
  position: absolute;
  width: 40%;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${pink};
  padding: 1rem;
  border-radius: 10px;
  color: ${black};

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  label {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
  }
  input {
    padding: 10px 1rem;
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 7px;
  }

  button {
    display: block;
    margin: auto;
    background-color: ${yellow};
    padding: 10px 1rem;
    font-size: 1.5rem;
    border-radius: 30px;
    transition: all 0.3s ease-in;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      background-color: ${black};
      color: ${white};
    }
  }

  .straight-line {
    width: 100%;
    display: block;
    margin: 1rem auto;
    height: 3px;
    background-color: ${white};
  }

  footer h2 {
    text-align: center;
  }

  h3 {
  }
`;

export const LoginContainer = styled(SignupContainer)``;

export const StyledAlert = styled.div`
  background-color: ${(props) => (props.error ? yellow : green)};
  color: ${(props) => (props.error ? black : white)};
  padding: 10px 1rem;
  width: 100%;
  margin: 1rem auto;
  border-radius: 7px;
  text-align: center;
`;
