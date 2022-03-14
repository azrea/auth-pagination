import { configureStore } from "@reduxjs/toolkit";
import products from "./reducers/productsReducer";
import movies from "./reducers/movieReducer";

const store = configureStore({
  reducer: {
    products: products,
    movies: movies,
  },
});

export default store;
