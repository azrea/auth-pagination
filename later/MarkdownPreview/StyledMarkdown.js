import styled from "styled-components";

export const StyledInputForm = styled.textarea`
  width: 100%;
  font-size: 1.5rem;
  padding: 15px 10px;
  min-height: 100px;
  overflow-wrap: word-break;
  height: min-content;
`;

export const MarkdownContainer = styled.section`
  max-width: 100%;
  height: 100vh;
  padding: 20vh 10vw;
  background-color: #03045e;
  color: #caf0f8;

  h1 {
    font-size: 3rem;
    text-transform: capitalize;
  }
`;

export const PreviewContainer = styled.div`
  width: 80%;
  color: #caf0f8;
  padding-top: 10vh;
`;
