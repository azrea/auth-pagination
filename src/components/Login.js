import React, { useState } from "react";
import { FormContainer } from "./StyledComponents";
import { Link } from "react-router-dom";

const Login = ({ setAuth }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await res.json();

      localStorage.setItem("token", data);
      setAuth(true);
    } catch (error) {
      console.log(error);
    }
  }
  const { email, password } = user;
  return (
    <FormContainer>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="What is your Email?"
          value={email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter your Password please"
          value={password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button className="submitBtn" type="submit">
          Submit
        </button>
      </form>
      <span>
        Don't have an account?
        <Link to="/register" className="registerBtn">
          <button>Register</button>
        </Link>
      </span>
    </FormContainer>
  );
};

export default Login;
