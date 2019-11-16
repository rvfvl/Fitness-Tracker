import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  height: 22px;
  padding: 5px;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Input = props => {
  const { name } = props;

  return (
    <>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
      <StyledInput {...props} />
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Input;
