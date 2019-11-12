import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import media from "config/mediaQueries";
import Title from "components/Title";

const SignInWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;

  ${media.medium`
    height: 50vh;
    width: 70vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;

const StyledImageContainer = styled.div`
  background-image: url("https://source.unsplash.com/featured/800x600/?gym");
  object-fit: cover;
  position: relative;
  top: -10%;
  height: 120%;
  width: 60%;
`;

const StyledFormWrapper = styled.div`
  background-color: red;
  flex-grow: 1;
  padding: 1rem 3rem;

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-bottom: 1rem;
  }
`;

const LoginForm = ({ children }) => {
  return (
    <SignInWrapper>
      <StyledImageContainer />

      <StyledFormWrapper>
        <Title>Sign In</Title>
        {children}
      </StyledFormWrapper>
    </SignInWrapper>
  );
};

LoginForm.propTypes = {
  children: PropTypes.node.isRequired
};

export default LoginForm;
