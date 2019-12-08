import React from "react";
import styled from "styled-components";
import useFirebaseAuth from "hooks/useFirebaseAuth";
import { FaHome, FaWeight } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Logo from "components/Logo";
import Icon from "components/Icon";

const SidePanelWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 75px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-right: 3px solid ${({ theme }) => theme.colors.heading};
`;

const MenuIconContainer = styled.div`
  margin-bottom: auto;
`;

const StyledLogOutButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
    color: #fff;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};

    svg {
      color: #fff;
    }
  }
`;

const SidePanel = () => {
  const { signOutUser } = useFirebaseAuth();

  return (
    <SidePanelWrapper>
      <Logo to="/">Fitness Tracker</Logo>

      <MenuIconContainer>
        <Icon exact to="/">
          <FaHome />
        </Icon>
        <Icon exact to="/measurements">
          <FaWeight />
        </Icon>
      </MenuIconContainer>

      <StyledLogOutButton onClick={signOutUser}>
        <FiLogOut />
      </StyledLogOutButton>
    </SidePanelWrapper>
  );
};

export default SidePanel;
