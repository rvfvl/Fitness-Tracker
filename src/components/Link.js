import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(RouterLink)`
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0 0 1rem;
`;

export default Link;
