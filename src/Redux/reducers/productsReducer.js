import data from "../../data";
import * as actionTypes from "../actions/actionTypes";
const initialState = { data: data, recent: [] };
const products = (state = initialState, action) => {
  if (action.type === actionTypes.addRecentProduct) {
    const identifiedProduct = state.data.filter((product) => {
      return product.id === action.payload;
    });

    return { ...state, recent: [...state.recent, identifiedProduct] };
  }
  return state;
};

export default products;
