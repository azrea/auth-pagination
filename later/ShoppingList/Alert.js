import React from "react";
import { StyledAlert } from "./StyledShoppingList";

const Alert = ({ text, color }) => {
  return <StyledAlert color={color}>{text}</StyledAlert>;
};

export default Alert;
