import React, { useState } from "react";
import Values from "values.js";
import Color from "./Color";
import {
  StyledButton,
  StyledColorTitle,
  StyledForm,
  StyledMainContainer,
  StyledTextBox,
  StyledTextBoxContainer,
  StyledUList,
  StyledUListContainer,
} from "./StyledColorGenerator";

const ColorGenerator = () => {
  const [error, setError] = useState(false);
  const [color, setColor] = useState("#ff6201");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <StyledMainContainer color={color}>
      <StyledColorTitle>Color Generator</StyledColorTitle>

      <StyledForm action="" onSubmit={handleSubmit}>
        <StyledTextBoxContainer>
          <StyledTextBox
            error={error}
            type="text"
            placeholder="#ffffff"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </StyledTextBoxContainer>

        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>

      <StyledUListContainer>
        <StyledUList>
          {list.map((color, index) => {
            return (
              <Color
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
              />
            );
          })}
        </StyledUList>
      </StyledUListContainer>
    </StyledMainContainer>
  );
};

export default ColorGenerator;
