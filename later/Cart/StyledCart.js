import styled from "styled-components";

export const MainContainer = styled.section`
  min-height: 120vh;
`;

export const StyledHeader = styled.header`
  background-color: #35d4ba;
  color: black;

  div {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
    align-items: center;
    padding: 10px;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 2rem;
    position: relative;
  }

  .cart-items-number {
    position: absolute;
    font-size: 1.3rem;
    top: -28px;
    right: -20px;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background-color: #ffed66;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  display: grid;
  margin: 0 auto;
  margin-top: 100px;
  justify-items: center;

  h1 {
    font-size: 2.2rem;
    margin: 10px auto;
    text-align: center;
  }

  .cart-products {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    margin-bottom: 2rem;

    &:after {
      content: "";
      display: block;
      height: 2px;
      background-color: #35d4ba;
      width: 100%;
      justify-self: center;
      margin-top: 2rem;
    }
  }

  .total {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
`;

export const CartItemContainer = styled.div`
  display: flex;

  .info-grid {
    flex-grow: 2;
    margin-left: 25px;
  }

  .increment-grid {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
  }

  img {
    width: 100px;
    object-fit: cover;
  }
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  color: #35d4ba;
  &.clear-btn {
    border: solid 2px red;
    margin-top: 3rem;
    font-size: 1.5rem;
    border-radius: 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in;

    &:hover {
      background-color: red;
      border-radius: 10px;
      color: white;
    }
  }

  .angleIcon {
    &:hover {
      color: red;
      transform: scale(1.5);
    }
  }
  .bareBtn {
    &:hover {
      color: red;
      transform: scale(1.2);
    }
  }
`;

export const StyledLoading = styled.div`
  text-align: center;
  font-size: 3rem;
  margin: 50vh auto;
`;
