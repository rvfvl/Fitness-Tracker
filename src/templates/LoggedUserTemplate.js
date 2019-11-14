import React from "react";
import PropTypes from "prop-types";
import SidePanel from "components/SidePanel";
import styled from "styled-components";

const UserTemplateWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
`;

const MainContentWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.image};
  background-color: #fff;
  width: 100%;
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
