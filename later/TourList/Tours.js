import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, deleteTour }) => {
  return (
    <>
      <div className="tourContainer">
        <h2>Come... see a Marvellous Tour...or more</h2>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />;
          })}
          <br />
        </div>
      </div>
    </>
  );
};

export default Tours;
