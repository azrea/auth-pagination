import styled from "styled-components";

export const StyledMainContainer = styled.section`
  min-height: 100vh;
  background-color: #9df7e5;
  position: relative;
  max-width: 1000px;
  margin: auto;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  padding-top: 100px;
`;

export const StyledReviewContainer = styled.section`
  display: block;
  width: 80%;
  margin: 50px auto;

  position: relative;
`;

export const StyledSlider = styled.div`
  position: absolute;
`;

export const StyledName = styled.h2`
  text-transform: capitalize;
  text-align: center;
  margin: 30px 0 5px;
`;

export const StyledReviewTitle = styled.h3`
  text-transform: capitalize;
  text-align: center;
  margin: 0 0 30px;
`;

export const StyledQuote = styled.p`
  text-align: center;
`;

export const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  margin: auto;
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 350px;
  padding: 3px 10px;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  background-color: #e5a9a9;
  cursor: pointer;
`;

export const StyledButtonLeft = styled(StyledButton)`
  left: 200px;
`;

export const StyledButtonRight = styled(StyledButton)`
  right: 200px;
`;
