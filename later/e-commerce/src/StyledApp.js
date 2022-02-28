import styled from "styled-components";
import { StyledHero } from "./components/hero/styledHero";
import { Link } from "react-router-dom";

export const MainContainer = styled.main`
  .arrow {
    ${StyledHero}&:hover {
      opacity: 1;
      cursor: pointer;
      color: var(--black);
    }
  }

  aside {
    position: fixed;
    bottom: 0;
    left: 50%;
  }
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.color};
`;
