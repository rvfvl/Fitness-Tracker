import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Icon = styled(NavLink)`
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  &.active {
    background-color: white;

    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  svg {
    width: 25px;
    height: 25px;
    color: #fff;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};

    svg {
      color: #fff;
    }
  }
`;

export default Icon;
