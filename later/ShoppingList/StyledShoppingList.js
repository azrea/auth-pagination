import styled from "styled-components";

export const StyledMainContainer = styled.section`
  min-height: 100vh;
  max-width: 1000px;
  margin: auto;
  background-color: #e56399;
  color: white;
  padding: 30px 20px;
`;

export const ToDoListContainer = styled.div`
  min-height: 100px;
  width: 80%;
  background-color: #e0b0d5;
  color: black;
  display: block;
  margin: 150px auto;
  padding: 20px;
  border-radius: 5px;
`;

export const StyledTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

export const StyledInputBox = styled.input`
  display: block;
  width: 75%;
  height: 2rem;
  font-size: 1.1rem;
  padding: 0 10px;
  background-color: #79beee;
  border: #79beee;
`;

export const InputBoxContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 20px auto 40px;
`;

export const SubmitButton = styled.button`
  height: 2rem;
  font-size: 1.2rem;
  padding: 0 10px;
  cursor: pointer;
  background-color: #79beee;
`;

export const ListItemsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ListItemContainer = styled.div`
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-between;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  align-items: center;
`;

export const StyledIconButton = styled.button`
  border-radius: 50%;
  padding: 5px;
  width: 6rem;
  height: 4rem;
  margin: 0 5px;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;

export const StyledAlert = styled(StyledTitle)`
  width: 100%;
  background-color: ${(props) => props.color};
`;

export const StyledClearButton = styled(StyledIconButton)`
  display: block;
  margin: auto;
  height: 5rem;
  width: 5rem;
  margin-top: 10px;
  background-color: #e56399;
`;
