import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SinglePictureContainer } from "./StyledComponents";
import { Link } from "react-router-dom";

const SinglePicture = ({ name, price, url, id }) => {
  let navigate = useNavigate();

  return (
    <SinglePictureContainer
      className="singlePicture"
      style={{
        backgroundImage: `url(${url})`,
        cursor: "pointer",
      }}
      image={url}
    >
      <div className="text">
        <Link to={`/products/${id}`}>
          <h1>{name}</h1>

          <h2>${price}</h2>
        </Link>
      </div>
    </SinglePictureContainer>
  );
};

export default SinglePicture;
