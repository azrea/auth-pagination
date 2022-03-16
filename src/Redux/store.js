import { configureStore } from "@reduxjs/toolkit";
import products from "./reducers/productsReducer";
import movies from "./reducers/movieReducer";
import thunk from "redux-thunk";
const apiKey = process.env.REACT_APP_API_KEY;

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;

const store = configureStore({
  reducer: {
    products: products,
    movies: movies,
  },
});

export function fetchMovies() {
  return async function fetchMoviesThunk(dispatch, getState) {
    const response = await fetch(url, getState);
    const data = await response.json();

    dispatch();
  };
}

store.dispatch(fetchMovies());

export default store;
