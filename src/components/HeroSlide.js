import React from "react";

const HeroSlide = ({ collection, name, price, image }) => {
  return (
    <>
      <div className="flexHero">
        <span>
          <h3>Experience the Joy of gazing at the</h3>
          <h2>{collection} Collection's</h2>
          <h1>{name}</h1>
          <h2>Only £{price}</h2>
        </span>
        <img src={image} alt="Sample here" />
      </div>
    </>
  );
};

export default HeroSlide;
