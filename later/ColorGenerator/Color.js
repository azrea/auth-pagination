import React, { useState, useEffect } from "react";
import { StyledHexVal, StyledList } from "./StyledColorGenerator";

const Color = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 700);
    return () => clearTimeout(timeout);
  }, [alert]);

  const hexValue = `#${hexColor}`;
  return (
    <StyledList
      rgbVal={bcg}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexColor);
      }}
    >
      <StyledHexVal
        textColor={() => {
          return index < 10 ? "black" : "white";
        }}
      >
        {weight}%
      </StyledHexVal>
      <StyledHexVal
        textColor={() => {
          return index < 10 ? "black" : "white";
        }}
      >
        {hexValue}
      </StyledHexVal>
      {alert && (
        <StyledHexVal
          textColor={() => {
            return index < 10 ? "black" : "white";
          }}
        >
          COPIED TO CLIPBOARD
        </StyledHexVal>
      )}
    </StyledList>
  );
};

export default Color;
