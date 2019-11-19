import React, { useContext } from "react";
import LoggedUserTemplate from "templates/LoggedUserTemplate";
import Container from "components/Container";
import { FirebaseAuthContext } from "context/FirebaseAuthProvider";

const Dashboard = () => {
  const { currentUser } = useContext(FirebaseAuthContext);

  return (
    <LoggedUserTemplate>
      <Container row="2">
        Welcome <strong>{currentUser.displayName}</strong>!
      </Container>
      <Container />
      <Container />
    </LoggedUserTemplate>
  );
};

export default Dashboard;
