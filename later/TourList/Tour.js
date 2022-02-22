import { useState } from "react";

const Tour = ({ id, name, info, image, price, deleteTour }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <div className="tour">
      <h2>{name}</h2>
      <img src={image} alt="" />
      <p>
        {readMore ? `${info.substring(0, 200)}...` : `${info}`}
        <span onClick={() => setReadMore(!readMore)}>
          {readMore ? " Read More" : " Show Less"}
        </span>
      </p>
      <span> £{price} </span>
      {readMore ? (
        <button
          className="notInterestedBtn"
          onClick={() => {
            deleteTour(id);
          }}
        >
          Not Interested
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Tour;
