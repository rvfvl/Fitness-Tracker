import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Badge = styled.div`
  padding: 1rem;
  color: #fff;
  border-radius: 2px;

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
  type: PropTypes.oneOf(["info", "danger", "success"]).isRequired
};

Badge.defaultProps = {
  type: "info"
};

export default Badge;
