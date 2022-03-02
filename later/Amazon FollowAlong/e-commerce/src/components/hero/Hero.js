import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import gunWatch from "../../images/gunWatch.jpg";
import santaClaus from "../../images/santa claus.jpg";
import christmasTree from "../../images/christmas tree.jpg";
import wall1 from "../../images/wall1.jfif";
import wall2 from "../../images/wall2.jfif";
import wall3 from "../../images/wall3.jfif";

import {
  ArrowButton,
  CarHeroContainer,
  ChristmasHeroContainer,
  HeroContainer,
  StyledHero,
} from "./styledHero";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { StyledLink } from "../../StyledApp";

const Hero = () => {
  const [show, setShow] = useState(3);

  useEffect(() => {
    setShow(1);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      let int = 1;
      slideMove(int);
    }, 5000);

    return () => clearInterval(slideInterval);
  });

  function slideMove(number) {
    let val = show + number;
    if (val < 1) {
      val = 3;
    }
    if (val > 3) {
      val = 1;
    }
    setShow(val);
  }

  return (
    <StyledHero>
      <ChristmasHeroContainer className={`${show === 3 ? "show" : "hideLast"}`}>
        <div className="info">
          <h2>Christmas isn't here yet...but we are already prepared.</h2>
          <p>Come get a bundle to deal with the holiday</p>

          <StyledLink to="/products">
            <button>More Christmas items !</button>
          </StyledLink>
        </div>

        <div className="block">
          <Link to="/products/16">
            <img src={christmasTree} alt="" />
            <h4>
              <ArrowForward />
            </h4>
          </Link>
        </div>
        <div className="block ">
          <Link to="/products/17">
            <img src={santaClaus} alt="" />

            <h4>
              <ArrowForward />
            </h4>
          </Link>
        </div>
        <div className="block ">
          <Link to="/products/16">
            <img src={christmasTree} alt="" />

            <h4>
              <ArrowForward />
            </h4>
          </Link>
        </div>
      </ChristmasHeroContainer>

      <HeroContainer className={`${show === 2 ? "show" : "hide"}`}>
        <div className="info">
          <h2>Look no further for the greatest offers</h2>
          <p>The best watches you can find.</p>

          <StyledLink to="/products">
            <button>Shop for Luxuries like this Watch. </button>
          </StyledLink>
          <p className="smallText">*Only 3 left in stock</p>
        </div>

        <div className="block ">
          <Link to="/products/13">
            <img src={gunWatch} alt="" />
            <h3>Watch</h3>
            <h4>
              <ArrowForward />
            </h4>
          </Link>
        </div>
        <div className="block ">
          <Link to="/products/13">
            <img src={gunWatch} alt="" />
            <h3>Watch</h3>
            <h4>
              <ArrowForward />
            </h4>
          </Link>
        </div>
        <div className="block ">
          <Link to="/products/13">
            <img src={gunWatch} alt="" />
            <h3>Watch</h3>
            <h4>
              <ArrowForward />
            </h4>
          </Link>
        </div>
      </HeroContainer>

      <CarHeroContainer className={`${show === 1 ? "show" : "hideLast"}`}>
        <div className="info">
          <h2>Look no further for the greatest offers</h2>
          <p>The best wallpaper you can find.</p>

          <StyledLink to="/products">
            <button>I'm interested !</button>
          </StyledLink>
        </div>

        <div className="block">
          <Link to="/products/14">
            <img src={wall3} alt="" />
            <h3>More Like This</h3>
            <h4>
              <ArrowForward />
            </h4>
          </Link>
        </div>
        <div className="block ">
          <Link to="/products/15">
            <img src={wall1} alt="" />
            <h3>More Like This</h3>
            <h4>
              <ArrowForward />
            </h4>
          </Link>
        </div>
        <div className="block ">
          <Link to="/products/18">
            <img src={wall2} alt="" />
            <h3>More Like This</h3>
            <h4>
              <ArrowForward />
            </h4>
          </Link>
        </div>
      </CarHeroContainer>

      <ArrowButton className="right" onClick={() => slideMove(1)}>
        <ArrowForward />
      </ArrowButton>
      <ArrowButton className="left" onClick={() => slideMove(-1)}>
        <ArrowBack />
      </ArrowButton>
    </StyledHero>
  );
};

export default Hero;
