import React, { useContext } from "react";
import LoggedUserTemplate from "templates/LoggedUserTemplate";
import Container from "components/Container";
import { FirebaseAuthContext } from "context/FirebaseAuthProvider";
import useCollection from "hooks/useCollection";

const Dashboard = () => {
  const { currentUser } = useContext(FirebaseAuthContext);

  const { data } = useCollection("weight");

  console.log(data);

  return (
    <LoggedUserTemplate>
      <Container row="2">
        Welcome <strong>{currentUser.displayName}</strong>! <br />
        {currentUser.uid}
      </Container>
      <Container />
      <Container />
    </LoggedUserTemplate>
  );
};

export default Dashboard;
