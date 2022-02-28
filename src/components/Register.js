import React, { useState } from "react";
import { FormContainer, Alert } from "./StyledComponents";
import { Link } from "react-router-dom";

const Register = ({ setAuth, message, setMessage }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const body = { name, email, password };
      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      localStorage.setItem("token", data);
      setAuth(true);

      console.log(data);
    } catch (err) {
      console.error(err);
      setAuth(false);
      setMessage("Registration failed");
    }
  }
  return (
    <FormContainer>
      {message && <Alert>{message}</Alert>}
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What is your Name?"
          value={name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
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
        Already have an account?
        <Link to="/login">
          <button>Login</button>
        </Link>
      </span>
    </FormContainer>
  );
};

export default Register;
