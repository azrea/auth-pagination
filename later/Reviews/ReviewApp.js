import React from "react";
import Review from "./Review";
import "./Review.css";

const ReviewApp = () => {
  return (
    <section className="reviewAppContainer">
      <div className="reviewContainer">
        <Review />
      </div>
    </section>
  );
};

export default ReviewApp;
