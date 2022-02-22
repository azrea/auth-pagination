import React from "react";
import Question from "./Question";
import Questions from "./Questions";

const QandA = () => {
  return (
    <section className="qaMainContainer">
      <div className="qaContainer">
        <div className="qaFlexLeft">
          <h2>Questions and Answers</h2>
          <span>and maybe several images of question marks</span>
        </div>

        <div className="qaFlexRight">
          <div className="qaFlexCol">
            <Questions />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QandA;
