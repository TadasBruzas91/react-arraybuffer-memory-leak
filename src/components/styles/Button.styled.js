import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border: 2px solid blueviolet;
  color: blueviolet;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  transition: 50ms transform;
  user-select: none;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;
