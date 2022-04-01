import React from "react";
import store from "../Redux/store";

const FilterList = () => {
  const products = store.getState().products.data;
  const categories = new Set([]);
  let highestPrice = 0;
  refineCategory();

  function refineCategory() {
    products.forEach((product) => {
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

  return (
    <div className="conditions">
      {/* freeShipping, price and category
    fixed position */}

      <div className="categoryList">
        <h1>Category</h1>

        <ul>
          <li>All</li>

          {[...categories].map((category) => {
            return <li key={category}>{category}</li>;
          })}
        </ul>
      </div>
      <br />
      <div className="priceContainer">
        <h1>Price</h1>
        <h3>£{highestPrice}</h3>
        <input
          type="range"
          min="0"
          max={highestPrice}
          class="priceRange"
          value="0"
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
