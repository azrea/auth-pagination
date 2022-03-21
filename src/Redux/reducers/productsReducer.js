import data from "../../data";
import * as actionTypes from "../actions/actionTypes";
const initialState = { data: data, recent: [] };
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
  return state;
};

export default products;

function checkRecent(arr) {
  let set = new Set(arr);

  let newArr = [...set];
  console.log(set);

  if (newArr.length > 4) {
    newArr.shift();
  }
  let newerArr = newArr.map((number) => {
    return parseInt(number);
  });

  return newerArr;
}
