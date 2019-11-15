import styled, { css } from "styled-components";

const Container = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.image};
  background-color: #fff;
  padding: 1rem;

  ${({ row }) =>
    row &&
    css`
      grid-row: 1 / span ${row};
    `}

  ${({ col }) =>
    col &&
    css`
      grid-column: 1 / span ${col};
    `}
`;

export default Container;
