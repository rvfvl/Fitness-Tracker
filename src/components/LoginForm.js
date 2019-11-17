import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import media from "config/mediaQueries";

const SignInWrapper = styled.div`
  position: absolute;
  width: 80%;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${media.medium`
    height: 80vh;
    width: 70vw;
    flex-direction: column;
  `}

  ${media.large`
    flex-direction: row;
    height: 50vh;
  `}
`;

const StyledImageContainer = styled.div`
  background-image: url("https://source.unsplash.com/featured/800x600/?gym");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: ${({ theme }) => theme.shadows.default};
  position: relative;
  height: 100%;

  ${media.large`
    width: 60%;
    max-width: 60%;
    top: -10%;
    height: 120%;
  `}
`;

const StyledFormWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.container};
  flex-grow: 1;
  padding: 1rem 3rem 3rem;

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
      <StyledFormWrapper>{children}</StyledFormWrapper>
    </SignInWrapper>
  );
};

LoginForm.propTypes = {
  children: PropTypes.node.isRequired
};

export default LoginForm;
