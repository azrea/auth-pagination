import * as actionTypes from "../actions/actionTypes";

const initialState = [{ popularMovies: {} }];

export const movies = (state = initialState, action) => {
  if (action.type === actionTypes.getPopularMovies) {
    return [...action.payload];
  } else {
    return state;
  }
};

export default movies;
