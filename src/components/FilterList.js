import React, { useEffect } from "react";
import store from "../Redux/store";
import * as actions from "../Redux/actions";

const FilterList = ({ categories, highestPrice }) => {
  const [group, setGroup] = React.useState("All");
  const [monetaryValue, setMonetaryValue] = React.useState(highestPrice);

  useEffect(() => {
    store.dispatch(actions.filterPrice(monetaryValue));
  }, [monetaryValue]);

  return (
    <div className="conditions">
      {/* freeShipping, price and category
    fixed position */}

      <div className="categoryList">
        <h1>Category</h1>

        <ul>
          <li
            className={`${group == "All" && "active"}`}
            onClick={() => {
              store.dispatch(actions.filterCategory("All"));
              setGroup("All");
            }}
          >
            All
          </li>

          {categories.map((category) => {
            return (
              <li
                className={`${group == category && "active"}`}
                onClick={() => {
                  store.dispatch(actions.filterCategory(category));
                  setGroup(category);
                }}
                key={category}
              >
                {category}
              </li>
            );
          })}
        </ul>
      </div>
      <br />
      <div className="priceContainer">
        <h1>Price</h1>
        <h3>£{monetaryValue}</h3>
        <input
          type="range"
          min="0"
          max={highestPrice}
          className="priceRange"
          value={monetaryValue}
          onChange={(e) => setMonetaryValue(e.target.value)}
        />
      </div>
      <br />
      <span>
        <h3>Free Shipping</h3> <input type="checkbox" />
      </span>
    </div>
  );
};

export default FilterList;

// const Category = () => {
//   return(

//   )
// }
