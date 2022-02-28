import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context";
import { StyledProductsFilter } from "./StyledProducts";

const ProductsFilter = () => {
  const [slider, setSlider] = useState(1000);
  const [checked, setChecked] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const {
    data,
    filterCategory,
    filterPrice,
    checkShipping,
    clearFilter,
    filterName,
  } = useGlobalContext();

  const categoryData = [
    ...new Set(
      data.map((item) => {
        const { category } = item;

        return category;
      })
    ),
  ];

  function handleSlider(e) {
    setSlider(e.target.value);
    filterPrice(e.target.value);
  }

  function handleCheck(e) {
    setChecked(!checked);

    if (checked) {
      checkShipping(true);
    } else {
      checkShipping(false);
    }
  }

  function handleClear() {
    setSlider(1000);
    clearFilter();
    setSearchValue("");
  }

  function handleSearch(e) {
    setSearchValue(e);
  }

  useEffect(() => {
    filterName(searchValue);
  }, [searchValue]);

  return (
    <StyledProductsFilter>
      <input
        className="searchFilter"
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <div className="categoryFilter">
        <h3>Category</h3>
        <ul>
          <li onClick={() => filterCategory("")}>All</li>
          {categoryData.map((category, index) => {
            return (
              <li onClick={() => filterCategory(category)} key={index}>
                {category}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="priceFilter">
        <h3>Price</h3>
        <label htmlFor="priceRange">{`£${slider}`}</label>
        <input
          type="range"
          name="priceRange"
          id="priceRange"
          min="0"
          max="1000"
          value={slider}
          onChange={(e) => handleSlider(e)}
        />
      </div>

      <div className="shippingFilter">
        <label htmlFor="freeShipping">Free Shipping</label>
        <input
          type="checkbox"
          name="freeShipping"
          id="freeShipping"
          onClick={(e) => handleCheck(e.target.value)}
        />
      </div>

      <button className="btn" onClick={handleClear}>
        Clear Filter
      </button>
    </StyledProductsFilter>
  );
};

export default ProductsFilter;
