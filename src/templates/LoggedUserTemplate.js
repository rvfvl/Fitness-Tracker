import React from "react";
import PropTypes from "prop-types";
import SidePanel from "components/SidePanel";
import styled from "styled-components";
import media from "config/mediaQueries";

const UserTemplateWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
`;

const MainContentWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  margin-left: ${({ theme }) => theme.componentSizes.sidePanel};

  ${media.medium`
    margin: 1rem 1rem 1rem calc(1rem + ${({ theme }) =>
      theme.componentSizes.sidePanel});
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  `}

  ${media.large`
    margin: 2rem 2rem 2rem calc(2.5rem + ${({ theme }) =>
      theme.componentSizes.sidePanel});
  `}
`;

const LoggedUserTemplate = ({ children }) => {
  return (
    <UserTemplateWrapper>
      <SidePanel />
      <MainContentWrapper>{children}</MainContentWrapper>
    </UserTemplateWrapper>
  );
};

LoggedUserTemplate.propTypes = {
  children: PropTypes.node.isRequired
};

export default LoggedUserTemplate;
