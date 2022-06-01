import styled, { keyframes, css } from "styled-components";

const spin = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const LoadSpiner = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  fill: black;
  animation: ${({ loadIndicator }) =>
    loadIndicator &&
    css`
      ${spin} 1s infinite
    `};
`;
