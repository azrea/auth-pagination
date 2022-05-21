import info from "../../data";
import * as actionTypes from "../actions/actionTypes";

const categories = new Set([]);
let highestPrice = 0;

refineCategory();

function refineCategory() {
  info.forEach((product) => {
    categories.add(product.category);
    getHighestPrice(product.price);
  });
}
function getHighestPrice(number) {
  if (number >= highestPrice) {
    highestPrice = number;
  } else {
    return;
  }
}

let conditions = {};

const initialState = {
  data: info,
  recent: [],
  categories: [...categories],
  maxPrice: highestPrice,
  cart: [],
};

const products = (state = initialState, action) => {
  if (action.type === actionTypes.addRecentProduct) {
    /* 
action.payload = id;
check if it exists in the recent array already 
if it does then don't add it
else check if the array length is greater than 4  
if it is then mutate the array to remove the first number
else add the number to the backend of the array
add the array to the state.recent
    */

    let array = checkRecent([...state.recent, action.payload]);

    return { ...state, recent: [...array] };
  }

  if (action.type === actionTypes.unfilter) {
    /* reset the state*/

    return { ...state, data: info };
  }

  if (action.type === actionTypes.filterPrice) {
    conditions = { ...conditions, price: action.payload };

    return { ...state, data: refineProducts() };
  }

  if (action.type === actionTypes.filterCategory) {
    if (action.payload === "All") {
      delete conditions.category;
    } else {
      conditions = { ...conditions, category: action.payload };
    }
    return { ...state, data: refineProducts() };
  }

  if (action.type === actionTypes.filterShipping) {
    if (action.payload === false) {
      delete conditions.freeShipping;
    } else {
      let boolString = action.payload.toString();

      conditions = { ...conditions, freeShipping: boolString };
    }

    return { ...state, data: refineProducts() };
  }

  if (action.type === actionTypes.addToCart) {
    // find the product
    let cartItem = info.filter((item) => item.id == action.payload);

    cartItem = { ...cartItem[0], amount: 1 };

    return { ...state, cart: [cartItem, ...state.cart] };
  }

  if (action.type === actionTypes.increaseInCart) {
    let newCart = state.cart.filter((item) => item.id !== action.payload);
    let cartItem = state.cart.filter((item) => item.id == action.payload);
    let amount = cartItem[0].amount;

    amount = amount + parseInt(action.guide);

    cartItem = { ...cartItem[0], amount: amount };

    if (amount == 0 && parseInt(action.guide) == -1) {
      return { ...state, cart: newCart };
    } else {
      newCart = [cartItem, ...newCart];
    }

    return { ...state, cart: newCart };
  }

  return state;
};

export default products;

//////////////////////////////////////////////////////////////
function checkRecent(arr) {
  let set = new Set(arr);

  let newArr = [...set];

  if (newArr.length > 4) {
    newArr.shift();
  }
  let newerArr = newArr.map((number) => {
    return parseInt(number);
  });

  return newerArr;
}

function refineProducts() {
  //filter the actual data using the conditions object everytime it gets updated. conditions object only contains active conditions

  return info.filter((product) => {
    return Object.entries(conditions).every(([key, value]) => {
      if (key === "price") {
        return product[key] < value;
      } else if (key === "freeShipping") {
        return product[key] === true;
      } else {
        return product[key] == value;
      }
    });
  });
}
