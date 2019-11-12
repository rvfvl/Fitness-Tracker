import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  border-radius: 10px;
  height: 22px;
  padding: 5px;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  margin-left: 5px;
`;

const Input = ({ type, name }) => {
  return (
    <>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
      <StyledInput type={type} name={name} />
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Input;
