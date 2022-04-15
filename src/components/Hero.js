import React, { useState, useEffect } from "react";
import HeroSlide from "./HeroSlide";
import store from "../Redux/store";
import { StyledHero } from "./StyledComponents";

const Hero = () => {
  const [number, setNumber] = useState(0);

  const state = store.getState().products.data;

  const { id, category, price, name, url } = state[number];

  useEffect(() => {
    const changeSlides = setInterval(() => {
      setNumber(Math.floor(Math.random() * state.length));
    }, 5000);

    return () => clearInterval(changeSlides);
  });
  return (
    <>
      <StyledHero positionStart="0" primary>
        <HeroSlide
          key={id}
          collection={category}
          price={price}
          name={name}
          image={url}
        />
      </StyledHero>
      <StyledHero positionStart="100vh"></StyledHero>
    </>
  );
};

export default Hero;
