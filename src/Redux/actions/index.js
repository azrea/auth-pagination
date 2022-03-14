import * as actions from "./actionTypes";

const apiKey = process.env.REACT_APP_API_KEY;

export const getPopularMovies = () => ({
  type: actions.getPopularMovies,
  url: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`,
});
