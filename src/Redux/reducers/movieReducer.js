import * as actions from "../actions/actionTypes";

const initialState = {
  popularMovies: [],
};

async function fetchMovies(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const movies = (state = initialState, action) => {
  if (action.type === actions.getPopularMovies) {
    const popularMovies = fetchMovies(action.url);

    return [...state, { popularMovies: popularMovies }];
  }
  return state;
};

export default movies;
