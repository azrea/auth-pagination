import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="taskBtn">
        {title}
      </button>
    </>
  );
};

export default Button;
