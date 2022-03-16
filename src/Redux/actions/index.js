import * as actionTypes from "./actionTypes";

export const getPopularMovies = (payload) => ({
  type: actionTypes.getPopularMovies,
  payload: payload,
});
