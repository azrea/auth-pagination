import styled from "styled-components";
import { keyframes } from "styled-components";

const hideLeft = keyframes`
0% {opacity: 1}
100% {opacity: 0.2;}`;

const show = keyframes`
0% {opacity: 0}

100% {opacity: 1}
`;

export const StyledHero = styled.main`
  position: relative;
  display: flex;
  width: 100%;
  height: 250px;
  background-color: var(--black);
  a {
    color: var(--black);
  }
`;

export const HeroContainer = styled.section`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  height: 250px;
  background-color: var(--purple);
  padding: 10px 5px;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;

  .block {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: auto;
    @media (max-width: 700px) {
      display: none;
    }
  }

  .block img {
    width: 75px;
    height: 75px;
    object-fit: contain;
    margin: 0 2rem 0.5rem;
    border-radius: 50%;
    @media (min-width: 1200px) {
      width: 150px;
      height: 150px;
    }
  }

  .block h3 {
    margin-bottom: 0.5rem;
  }

  .info {
    width: 50%;
    @media (max-width: 700px) {
      width: 100%;
    }
  }
  .info h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .info p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  &.show {
    left: 0;
    animation-name: ${show};
    animation-iteration-count: 1;
    animation-duration: 2s;
  }

  &.hide {
    left: 100%;
    display: none;
  }

  &.hideLast {
    display: none;
    right: 100%;
    animation-name: ${hideLeft};
    animation-duration: 3s;
    animation-iteration-count: 1;
  }

  .info button {
    padding: 5px 1rem;
    margin-bottom: 0.4rem;
    font-size: 1.1rem;
    background-color: var(--black);
    color: white;
    transition: all var(--transTimer);
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: var(--green);
      color: var(--black);
    }
  }
  .info .smallText {
    font-size: 0.65rem;
    margin-bottom: 0;
  }
`;

export const ChristmasHeroContainer = styled(HeroContainer)`
  background-color: var(--black);
  color: white;
  overflow: hidden;

  .info button {
    &:hover {
      background-color: var(--blue);
      color: var(--black);
    }
  }
  a {
    color: white;
  }
`;

export const CarHeroContainer = styled(HeroContainer)`
  background-color: var(--green);
  color: var(--black);

  .block img {
    width: 100px;
    border-radius: 0;
  }
`;

export const ArrowButton = styled.button`

    opacity: 0;
    position absolute;
    top: 50%;
    transform: translateY(140%);
    transition: all var(--transTimer);
    font-size: 1.6rem;
    z-index: 20;
    border-radius: 50%;
    background-color: white;
    border: solid 1px white;
    width: 3rem;
    height: 3rem;
    text-align: center;
   

    ${StyledHero}:hover &{
      opacity: 1;
      cursor: pointer;
    }

    &:hover{
      background-color: var(--orange);
      color: var(--black);
      border:solid 1px var(--orange);
    }
    
    
    &.left {
    left: 0.5rem;
  }

  &.right {
    right: 0.5rem;
  }
  
  `;

export const StyledRecentTab = styled.div`
  height: 316px;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  color: white;
  padding: 0.5rem;

  .viewedItems {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    margin: auto;
    column-gap: 5px;

    img {
      max-height: 250px;
      width: 100%;
      object-fit: contain;
    }
  }
`;
