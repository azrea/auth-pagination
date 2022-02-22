import styled from "styled-components";

export const MainContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  background-color: #8d775f;
  overflow: scroll;
`;

export const StyledLoading = styled.div`
  font-size: 4rem;
  text-align: center;
  display: block;
  width: 100%;
  margin: auto;
  padding-top: 400px;
`;

export const StyledTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
  padding-top: 100px;
`;

export const StyledJob = styled.h3`
  text-align: left;
  font-size: 2rem;
  word-spacing: 0.6rem;
  display: block;
  margin-bottom: 20px;
`;

export const StyledCompany = styled.span`
  display: block;
  border-radius: 8px;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: 0 0 15px;
  background-color: #d5bf86;
  padding: 5px;
  width: min-content;
`;

export const Styledates = styled.span`
  letter-spacing: 0.2rem;
  font-size: 1rem;
  display: block;
  margin: 0 0 10px;
  font-size: 1.5rem;
`;

export const Styledesc = styled.p`
  margin: 0 0 5px;
  display: block;
`;

export const StyledJobContainer = styled.div`
  width: 70%;
  display: inline-block;
  float: right;
  margin: 10px 50px 10px 10px;
`;

export const StyledButtonContainer = styled.div`
  width: 30%;
  display: block;
  float: left;
  position: relative;
  top: 150px;
`;

export const StyledButton = styled.button`
  display: block;
  padding: 5px 20px;
  margin: 15px;
  border-radius: 5px;
  background-color: #d5bf86;
  font-size: 1.2rem;
`;
