import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage.jsx";
import { MainContainer } from "./StyledApp";
import useInnerSize from "./useInnerSize";
import Header from "./components/Header/Header";
import ProductsPage from "./Pages/ProductsPage";
import SingleProductPage from "./Pages/SingleProductPage";
import CartPage from "./Pages/CartPage";

function App() {
  const { height, width } = useInnerSize();
  return (
    <Router>
      <MainContainer>
        <Header />
        <aside>
          <h1>{height}</h1>
          <h1>{width}</h1>
        </aside>
      </MainContainer>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
