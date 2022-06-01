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
  display: inline-block;
  width: 25px;
  height: 25px;
  background-color: black;
  animation: ${({ loadIndicator }) =>
    loadIndicator &&
    css`
      ${spin} 1s infinite
    `};
`;
