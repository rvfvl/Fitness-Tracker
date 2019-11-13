import styled from "styled-components";

const Button = styled.button`
  font-weight: 700;
  width: ${({ width }) => width || "150px"};
  height: 40px;
  border: 2px solid black;
  background-color: transparent;
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default Button;
