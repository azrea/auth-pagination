import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import RequireAuth from "./components/RequireAuth";
import { MainContainer } from "./components/StyledComponents";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  return (
    <MainContainer>
      <Routes>
        <Route
          path="/login"
          element={
            <RequireAuth
              redirectAddress={"/"}
              isAuthenticated={!isAuthenticated}
            >
              <Login setAuth={setAuth} />
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
              <Register setAuth={setAuth} />
            </RequireAuth>
          }
        />
        {/* made the login my homepage just because this is an auth page right now */}
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
      </Routes>
    </MainContainer>
  );
};

export default App;
