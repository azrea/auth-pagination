import React, { useState, useEffect } from "react";
import HeroSlide from "./HeroSlide";
import store from "../Redux/store";

const Hero = () => {
  const [number, setNumber] = useState(0);

  const state = store.getState().products;

  const { id, category, price, name, url } = state[number];

  useEffect(() => {
    const changeSlides = setInterval(() => {
      setNumber(Math.floor(Math.random() * 36));
    }, 5000);

    return () => clearInterval(changeSlides);
  });
  return (
    <div className="hero">
      {/* add arrows to navigate the slides */}

      <HeroSlide
        key={id}
        collection={category}
        price={price}
        name={name}
        image={url}
      />
    </div>
  );
};

export default Hero;
