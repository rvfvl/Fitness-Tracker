import styled from "styled-components";

const Button = styled.button`
  font-weight: 700;
  width: ${({ width }) => width || "150px"};
  height: 40px;
  color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background-color: transparent;
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export default Button;
