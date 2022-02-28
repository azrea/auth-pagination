import styled from "styled-components";

export const StyledProducts = styled.main`
  .introduction {
    text-align: center;
    padding: 2rem;
    margin-bottom: 5rem;
  }

  .mainContent {
    @media (min-width: 1000px) {
      display: flex;
    }
  }

  .productsGrid {
    @media (min-width: 700px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1000px) {
      flex-grow: 2;
    }
    @media (min-width: 1500px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export const StyledProduct = styled.section`
  height: 200px;
  width: 80%;
  background: url(${(props) => props.bgimg});
  background-size: cover;
  background-position: center;
  position: relative;

  margin: 1rem auto;
  border-radius: 8px;
  transition: all var(--transTimer);

  .productName {
    position: relative;
    top: 10px;
    left: 10px;
    width: 90%;
  }

  .productPrice {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  h2 {
    color: white;
    text-transform: capitalize;
  }

  .searchIcon {
    position: absolute;
    top: 40%;
    left: 45%;
    text-align: center;
    color: white;
  }
`;

export const StyledProductsFilter = styled.div`
  display: flex;
  flex-direction: column;

  .searchFilter {
    width: 250px;
    padding: 5px;
    font-size: 1rem;
    margin: 1.5rem 1rem;
  }

  .categoryFilter {
    padding: 0 1rem;
    margin-bottom: 1rem;
  }

  .categoryFilter li {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    list-style-type: none;
    cursor: pointer;
  }

  .priceFilter {
    padding: 0 1rem;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .priceFilter h3 {
    margin-bottom: 0.5rem;
  }

  .priceFilter label {
    display: block;
  }

  .shippingFilter {
    padding: 0 1rem;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .shippingFilter label {
    margin-right: 0.5rem;
  }

  .notBtn {
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
  }

  .btn {
    width: 200px;
    padding: 5px;
    margin: 0 1rem 3rem;
    cursor: pointer;
    background-color: var(--purple);
    border-radius: 6px;
  }
`;

export const StyledSingleProduct = styled.section`
  .introduction {
    padding: 0.2rem;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  h1 {
    text-align: center;
    margin: 2rem auto;
  }
  img {
    width: 80%;
    max-height: 600px;
    object-fit: contain;
    display: block;
    margin: auto;
    border-radius: 10px;
  }
  .cartBtn {
    display: block;
    padding: 5px 20px;
    background-color: var(--black);
    color: white;
    margin: 1rem auto;
  }
`;
