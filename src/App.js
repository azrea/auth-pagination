import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  useNavigate,
  Routes,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth
              redirectAddress={"/dashboard"}
              isAuthenticated={!isAuthenticated}
            >
              <Login />
            </RequireAuth>
          }
        />
        <Route
          path="/register"
          element={
            <RequireAuth
              redirectAddress={"/dashboard"}
              isAuthenticated={!isAuthenticated}
            >
              <Register />
            </RequireAuth>
          }
        />
        {/* made the login my homepage just because this is an auth page right now */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth
              redirectAddress={"/"}
              isAuthenticated={isAuthenticated}
            >
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};

export default App;
