import React from "react";
import { FormContainer } from "./StyledComponents";

const Login = () => {
  return (
    <FormContainer>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="What is your Email?" />
        <input type="password" placeholder="Enter your Password please" />
        <button className="submitBtn" type="submit">
          Submit
        </button>
        <span>
          Don't have an account?
          <button className="registerBtn">Register</button>
        </span>
      </form>
    </FormContainer>
  );
};

export default Login;
