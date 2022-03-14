import { combineReducers } from "redux";
import products from "./productsReducer";
import movies from "./movieReducer";

export default combineReducers({
  products,
  movies,
});
