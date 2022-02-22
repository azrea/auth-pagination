import styled from "styled-components";

export const StyledMainContainer = styled.section`
  min-height: 100vh;
  background-color: ${(props) => props.color};
  max-width: 1000px;
  margin: auto;
  padding: 10px 10px;
`;

export const StyledColorTitle = styled.h1`
  text-align: center;
  margin-top: 10px;
`;

export const StyledTextBox = styled.input`
  padding: 5px;
  margin: 20px auto;
  width: 300px;
  border-radius: 20px;
  border: 5px solid ${(props) => (props.error ? "red" : "black")};
`;

export const StyledTextBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  padding: 5px 20px;
  font-size: 1.5rem;
  border-radius: 5px;
  display: block;
  margin: 20px auto;
  cursor: pointer;
`;

export const StyledForm = styled.form``;

export const StyledUListContainer = styled.div`
  display: block;
  margin: auto;
`;

export const StyledUList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  column-gap: 5px;
  row-gap: 5px;
`;

export const StyledList = styled.li`
  background-color: rgb(${(props) => props.rgbVal});
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const StyledHexVal = styled.p`
  color: ${(props) => props.textColor};
  margin-bottom: 5px;
`;
