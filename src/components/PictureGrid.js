import React from "react";
import SinglePicture from "./SinglePicture";
import { StyledPictureGrid } from "./StyledComponents";
import store from "../Redux/store";

const products = store.getState().products.data;

function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

const PictureGrid = () => {
  return (
    <StyledPictureGrid>
      <h1 style={{ textAlign: "center", fontSize: "2rem", color: "#faf3dd" }}>
        Featured Photos
      </h1>
      <PictureRow />
      <h1 style={{ textAlign: "center", fontSize: "2rem", color: "#faf3dd" }}>
        Recently Visited Photos
      </h1>
      <RecentsRow />
    </StyledPictureGrid>
  );
};

const PictureRow = () => {
  const productsArray = new Set([]);

  while (productsArray.size < 4) {
    productsArray.add(randomNumber(36));
  }
  return (
    <div className="row">
      {productsArray.size < 4 ? (
        <h1>Loading</h1>
      ) : (
        [...productsArray].map((no) => {
          return <SinglePicture key={no} {...products[no]} />;
        })
      )}
    </div>
  );
};

const RecentsRow = () => {
  return <></>;
};

export default PictureGrid;
