import React, { useState } from "react";

const Question = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="qQuestionBox" onClick={() => setShow(!show)}>
      <div className="qQuestion">
        <h3>{question}</h3>
      </div>
      {show && <span className="aAnswer">{answer}</span>}
    </div>
  );
};

export default Question;
