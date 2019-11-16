import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const StyledIcon = styled(NavLink)`
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

const Icon = ({ icon, path }) => {
  return <StyledIcon to={path}>{icon()}</StyledIcon>;
};

Icon.propTypes = {
  icon: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
};

export default Icon;
