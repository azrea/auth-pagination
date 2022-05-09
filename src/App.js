import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import RequireAuth from "./components/RequireAuth";
import { MainContainer } from "./components/StyledComponents";
import Homepage from "./Pages/Homepage";
import ProductsPage from "./Pages/ProductsPage";
import PicturePage from "./Pages/PicturePage";
import CartPage from "./Pages/CartPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
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
    <MainContainer>
      <Routes>
        <Route path="/" element={<Homepage />} />
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
          path="/dashboard"
          element={
            <RequireAuth
              redirectAddress={"/login"}
              isAuthenticated={isAuthenticated}
            >
              <Dashboard setAuth={setAuth} />
            </RequireAuth>
          }
        />
        <Route path="/products" element={<ProductsPage />} />

        <Route path="/products/:id" element={<PicturePage />} />

        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </MainContainer>
  );
};

export default App;
