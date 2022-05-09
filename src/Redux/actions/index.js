import * as actionTypes from "./actionTypes";

export const getPopularMovies = (payload) => ({
  type: actionTypes.getPopularMovies,
  payload: payload,
});

export const addRecentProduct = (payload) => ({
  type: actionTypes.addRecentProduct,
  payload: payload,
});

export const filterCategory = (payload) => ({
  type: actionTypes.filterCategory,
  payload: payload,
});

export const unfilter = () => ({
  type: actionTypes.unfilter,
});

export const filterPrice = (payload) => ({
  type: actionTypes.filterPrice,
  payload: payload,
});

export const filterShipping = (payload) => ({
  type: actionTypes.filterShipping,
  payload: payload,
});

export const addToCart = (payload) => ({
  type: actionTypes.addToCart,
  payload: payload,
});

export const removeFromCart = (payload) => ({
  type: actionTypes.removeFromCart,
  payload: payload,
});

export const increaseInCart = (payload) => ({
  type: actionTypes.increaseInCart,
  payload: payload,
});

export const decreaseInCart = (payload) => ({
  type: actionTypes.decreaseInCart,
  payload: payload,
});
