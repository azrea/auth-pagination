import React, { useEffect, useRef, useState } from "react";
import Alert from "../Components/Alert";
import { SignupContainer } from "../StyledTaskList";
import { useGlobalAuth } from "./AuthContext";

const SignupPage = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useGlobalAuth();
  const [alert, setAlert] = useState({
    bad: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      console.log("Account could not be created.");
      setAlert({ bad: true, message: "Account could not be created." });
    }

    setLoading(false);
    setAlert({ bad: false, message: "Account succesfully created!" });
  }

  useEffect(() => {
    const disappearingAlert = setTimeout(() => {
      setAlert({ ...alert, message: "" });
    }, 3000);

    return () => {
      clearTimeout(disappearingAlert);
    };
  }, [alert.message]);

  return (
    <SignupContainer>
      <h1>Sign up</h1>
      {alert.message && <Alert {...alert} />}
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input type="text" name="name" ref={nameRef}></input>
        <label for="email">Email</label>
        <input type="email" name="email" ref={emailRef}></input>
        <label for="password">Password</label>
        <input type="password" name="password" ref={passwordRef}></input>
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>
      <div className="straight-line"></div>
      <footer>
        <h2>
          Already have an account? <span>Log in.</span>
        </h2>
      </footer>
    </SignupContainer>
  );
};

export default SignupPage;
