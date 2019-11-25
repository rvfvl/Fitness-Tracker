import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styled, { css } from "styled-components";

const LoadingSpinner = styled(Loader)`
  text-align: center;

  ${({ pageLoader }) =>
    pageLoader &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
`;

export default LoadingSpinner;
