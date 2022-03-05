import { combineReducers } from "redux";
import products from "./productsReducer";

const storeApp = combineReducers({
  products,
});

export default storeApp;
