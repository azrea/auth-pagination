import * as actions from "../actions";

async function fetchMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

export const movies = (state = [], action) => {
  if (action.type === actions.getPopularMovies) {
    const popularMovies = fetchMovies(action.url);

    return [...state, { popularMovies: popularMovies }];
  }
  return state;
};

export default movies;
