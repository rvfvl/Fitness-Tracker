import React from "react";
import styled from "styled-components";
import { FaHome, FaWeight } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Logo from "components/Logo";
import Icon from "components/Icon";

const SidePanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 75px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-right: 3px solid ${({ theme }) => theme.colors.heading};
`;

const MenuIconContainer = styled.div`
  margin-bottom: auto;
`;

const SidePanel = () => {
  return (
    <SidePanelWrapper>
      <Logo to="/">Fitness Tracker</Logo>

      <MenuIconContainer>
        <Icon icon={FaHome} path="/" />
        <Icon icon={FaWeight} path="/sdsd" />
        <Icon icon={FaHome} path="/sdsd" />
      </MenuIconContainer>

      <Icon icon={FiLogOut} path="/signin" />
    </SidePanelWrapper>
  );
};

export default SidePanel;
