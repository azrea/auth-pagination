import * as actionTypes from "./actionTypes";

export const getPopularMovies = (payload) => ({
  type: actionTypes.getPopularMovies,
  payload: payload,
});

export const addRecentProduct = (payload) => ({
  type: actionTypes.addRecentProduct,
  payload: payload,
});
