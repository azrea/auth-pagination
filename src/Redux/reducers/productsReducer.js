import info from "../../data";
import * as actionTypes from "../actions/actionTypes";
const initialState = {
  data: info,
  recent: [],
};

let conditions = {};

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
    conditions = { ...conditions, category: action.payload };

    return { ...state, data: refineProducts() };
  }

  if (action.type === actionTypes.filterShipping) {
    conditions = { ...conditions, freeShipping: action.payload };

    return { ...state, data: refineProducts() };
  }

  return state;
};

export default products;

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
      } else {
        return product[key] == value;
      }
    });
  });
}
