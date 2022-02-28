import { Search } from "@material-ui/icons";
import React, { useState } from "react";

import { StyledProduct } from "./StyledProducts";

const SingleProduct = ({ name, url, price }) => {
  const [brightness, setBrightness] = useState("");
  const [opacity, setOpacity] = useState(0);
  function handleHover() {
    setBrightness("black");
    setOpacity(1);
  }

  function clearHandleHover() {
    setBrightness("");
    setOpacity(0);
  }
  return (
    <StyledProduct
      style={{ background: brightness }}
      bgimg={url}
      onMouseOver={handleHover}
      onMouseLeave={clearHandleHover}
    >
      <h2 className="productName" style={{ opacity: opacity }}>
        {name}
      </h2>
      <h2 className="productPrice" style={{ opacity: opacity }}>
        £ {price}
      </h2>

      <Search
        className="searchIcon"
        style={{ fontSize: "3rem", opacity: opacity }}
      />
    </StyledProduct>
  );
};

export default SingleProduct;
