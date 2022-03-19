import React from "react";
import { useNavigate } from "react-router-dom";

const SinglePicture = ({ name, price, url, id }) => {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`products/${id}`);
      }}
      className="singlePicture"
      style={{
        backgroundImage: `url(${url})`,
        cursor: "pointer",
      }}
      image={url}
    >
      <div className="text">
        <h1>{name}</h1>

        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default SinglePicture;
