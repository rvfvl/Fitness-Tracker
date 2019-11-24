import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Badge = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  color: #fff;
  border-radius: 2px;
  max-width: 300px;

  ${({ info }) =>
    info &&
    css`
      background-color: #007bff;
    `}

  ${({ danger }) =>
    danger &&
    css`
      background-color: #dc3545;
    `}

  ${({ success }) =>
    success &&
    css`
      background-color: #28a745;
    `}
`;

Badge.propTypes = {
  info: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool
};

Badge.defaultProps = {
  info: true
};

export default Badge;
