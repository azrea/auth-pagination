import React, { useState } from "react";
import Question from "./Question";
import data from "./data";

const Questions = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <>
      {questions.map((ask) => {
        return <Question question={ask.question} answer={ask.answer} />;
      })}
    </>
  );
};

export default Questions;
