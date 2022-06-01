import styled, { css, keyframes } from "styled-components";

const menuSlideIn = keyframes`
  0%{
    transform: translateX(-100vw);
    opacity: 0;
  }
  1%{
    opacity: 1;
  }
  100%{
    transform: translateX(0);
  }
`;

const menuSlideOut = keyframes`
 0%{
    transform: translateX(0);
  }
  99%{
    opacity: 1;
  }
  100%{
    transform: translateX(-100vw);
    opacity: 0;
  }
`;

export const MobileMenu = styled.ul`
  background: black;
  color: white;
  padding: 0;
  text-align: center;
  transform: translateX(-100vw);
  animation: ${({ menuOpen, firstLoad }) =>
    menuOpen
      ? css`
          ${menuSlideIn} 0.4s 1 forwards
        `
      : !firstLoad &&
        css`
          ${menuSlideOut} 0.4s 1 forwards
        `};

  li {
    list-style: none;
    padding: 0.5rem 0;
  }
`;
