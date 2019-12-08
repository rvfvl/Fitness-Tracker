import React, { useContext } from "react";
import LoggedUserTemplate from "templates/LoggedUserTemplate";
import Container from "components/Container";
import { FirebaseAuthContext } from "context/FirebaseAuthProvider";
import Title from "components/Title";

const Dashboard = () => {
  const { currentUser } = useContext(FirebaseAuthContext);

  return (
    <LoggedUserTemplate>
      <Container>
        <Title>Welcome, {currentUser.displayName}!</Title>
        <p>
          This app is currently under development. At this point it allow users
          to track their body measurements under the 'measurements' page.
        </p>
        <p>
          In the near future it will expand with additional functionalities.
        </p>
      </Container>
    </LoggedUserTemplate>
  );
};

export default Dashboard;
