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
  padding: 1rem;
  width: 100%;
  display: grid;
  grid-gap: 1rem;

  ${media.medium`
    margin: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  `}

  ${media.large`
    margin: 2.5rem;
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
