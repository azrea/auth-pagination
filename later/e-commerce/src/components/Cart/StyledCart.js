import styled from "styled-components";

export const StyledContainer = styled.main`
  width: 80%;
  height: 100vh;
  display: block;
  margin: auto;

  color: var(--black);

  .title {
    font-size: 2.4rem;
    margin-bottom: 7rem;
    margin-top: 1rem;
    @media (min-width: 600px) {
      font-size: 3rem;
    }
  }

  .itemContainer {
    display: flex;
    margin: 2rem 0.5rem;
    justify-content: space-between;
    align-items: center;

    img {
      width: 20%;
      border-radius: 5px;
    }

    h2 {
      @media (min-width: 900px) {
        font-size: 2rem;
      }
    }

    .iconBtns {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
      @media (min-width: 900px) {
        font-size: 2rem;
      }
    }
  }

  .payBtn {
    background-color: var(--black);
    color: white;
    display: block;
    margin: auto;
    padding: 5px 20px;
    border-radius: 9px;
    font-size: 1.3rem;
  }

  .total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }
`;
