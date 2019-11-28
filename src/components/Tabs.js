import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const TabsWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

const StyledTab = styled.div`
  padding: 1rem;
  text-transform: capitalize;
  cursor: pointer;
  width: 50px;
  text-align: center;

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.background};
  }

  ${({ active }) =>
    active &&
    css`
      border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
      font-weight: 700;
    `}
`;

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <TabsWrapper>
      {tabs.map(tab => (
        <StyledTab
          active={activeTab === tab}
          onClick={() => setActiveTab(tab)}
          key={tab}
        >
          {tab}
        </StyledTab>
      ))}
    </TabsWrapper>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired
};

export default Tabs;
