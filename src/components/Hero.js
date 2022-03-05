import React, { useState, useEffect } from "react";
import HeroSlide from "./HeroSlide";

const Hero = () => {
  return (
    <div className="hero">
      {/* add arrows to navigate the slides */}
      <HeroSlide
        collection="Star"
        price="10.99"
        name="Starry Nightmare"
        image="https://i.pinimg.com/originals/6e/72/b1/6e72b1797831868d5f769a2a4bc0e1fe.jpg"
      />
    </div>
  );
};

export default Hero;
