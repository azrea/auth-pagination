import React from "react";
import { FormContainer } from "./StyledComponents";

const Register = () => {
  return (
    <FormContainer>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="What is your Name?" />
        <input type="email" placeholder="What is your Email?" />
        <input type="password" placeholder="Enter your Password please" />
        <button className="submitBtn" type="submit">
          Submit
        </button>
        <span>
          Already have an account?
          <button className="registerBtn">Login</button>
        </span>
      </form>
    </FormContainer>
  );
};

export default Register;
