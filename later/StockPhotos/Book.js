import React from "react";
import { BookContainer } from "./StyledStockPhotos";

const book = ({ volumeInfo }) => {
  const { title, authors, imageLinks } = volumeInfo;

  return (
    <BookContainer>
      <img
        src={imageLinks ? imageLinks.thumbnail : ""}
        alt="Nothing to see here"
      />
      <h1>{title}</h1>
      <h2>By {authors ? authors[0] : "Nobody Apparently"}</h2>
    </BookContainer>
  );
};

export default book;
