import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import RequireAuth from "./components/RequireAuth";
import { MainContainer } from "./components/StyledComponents";
import { AppProvider } from "./components/Context";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState("");

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5000/auth/verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const data = await response.json();

      data === true ? setAuth(true) : setAuth(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    isAuth();
  });
  useEffect(() => {
    let timer = setTimeout(() => setMessage(""), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  return (
    <AppProvider>
      <MainContainer>
        <Routes>
          <Route
            path="/login"
            element={
              <RequireAuth
                redirectAddress={"/"}
                isAuthenticated={!isAuthenticated}
              >
                <Login
                  setAuth={setAuth}
                  message={message}
                  setMessage={setMessage}
                />
              </RequireAuth>
            }
          />
          <Route
            path="/register"
            element={
              <RequireAuth
                redirectAddress={"/"}
                isAuthenticated={!isAuthenticated}
              >
                <Register
                  setAuth={setAuth}
                  message={message}
                  setMessage={setMessage}
                />
              </RequireAuth>
            }
          />
          <Route
            path="/"
            element={
              <RequireAuth
                redirectAddress={"/login"}
                isAuthenticated={isAuthenticated}
              >
                <Dashboard setAuth={setAuth} />
              </RequireAuth>
            }
          />
          {/* this is where my project links will go */}
        </Routes>
      </MainContainer>
    </AppProvider>
  );
};

export default App;
