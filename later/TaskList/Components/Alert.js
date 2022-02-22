import React from "react";
import { StyledAlert } from "../StyledTaskList";

const Alert = ({ message, bad }) => {
  return (
    <StyledAlert error={bad}>
      <h2> {message}</h2>
    </StyledAlert>
  );
};

export default Alert;
