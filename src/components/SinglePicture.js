import React from "react";

const SinglePicture = ({ name, price, url }) => {
  return (
    <div
      className="singlePicture"
      style={{
        backgroundImage: `url(${url})`,
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
