import styled from "styled-components";

const Title = styled.p`
  font-size: ${({ fontSize }) => fontSize || "42px"};
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 700;
  margin: 10px auto 30px;
`;

export default Title;
