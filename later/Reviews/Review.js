import { React, useState } from "react";
import people from "./data";
import { FaQuoteRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Review = () => {
  const changeReview = (value) => {
    setIndex((index) => {
      let newIndex = index + value;
      return checkNumber(newIndex);
    });
  };

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      number = 0;
    }
    if (number < 0) {
      number = people.length - 1;
    }
    return number;
  };

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    setIndex(() => {
      if (randomNumber === index) {
        randomNumber = randomNumber + 1;
      }
      return checkNumber(randomNumber);
    });
  };
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  return (
    <article className="reviewFlex">
      <div className="reviewImgContainer">
        <img src={image} alt={name} className="reviewImg" />
        <span>
          <FaQuoteRight className="reviewQuoteIcon" />
        </span>
      </div>

      <div className="reviewInfoContainer">
        <h3>{name}</h3>
        <h2>{job}</h2>
        <article>{text}</article>

        <div className="reviewNavBtn">
          <FaArrowLeft className="left" onClick={() => changeReview(-1)} />
          <FaArrowRight className="right" onClick={() => changeReview(1)} />
        </div>
        <button className="randomReviewBtn" onClick={randomReview}>
          Surprise Me!
        </button>
      </div>
    </article>
  );
};

export default Review;
