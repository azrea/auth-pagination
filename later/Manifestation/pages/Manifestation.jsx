import React from "react";
import { Link } from "react-router-dom";
import { HomeContainer } from "../components/StyleManifestation";
import moon from "../images/moon.jpg";
import star from "../images/star.png";
import bigStar from "../images/star2.png";
import stars from "../images/star3.jfif";
import sun from "../images/sunOutline.png";
import redStar from "../images/star5.png";
import planet from "../images/saturn.gif";

const Manifestation = () => {
  return (
    <HomeContainer>
      <Link>
        <img src={sun} className="sun" alt="nothing to see here" />
      </Link>
      <Link>
        <img src={moon} alt="" className="moon" />
      </Link>
      <Link>
        <img src={star} alt="" className="yellowStar star" />
      </Link>
      <Link>
        <img src={bigStar} alt="" className="blueStar star" />
      </Link>
      <Link>
        <img src={redStar} alt="" className=" redStar star" />
      </Link>
      <Link>
        <img src={stars} className="multipleStars star" alt="" />
      </Link>

      <Link>
        <img src={planet} className="planet" alt="" />
      </Link>
    </HomeContainer>
  );
};

export default Manifestation;
