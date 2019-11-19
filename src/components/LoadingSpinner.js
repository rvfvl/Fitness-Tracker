import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const StyledLoader = styled(Loader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingSpinner = () => {
  return (
    <StyledLoader type="Triangle" color="#00BFFF" height={100} width={100} />
  );
};

export default LoadingSpinner;
