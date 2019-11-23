import React from "react";
import LoggedUserTemplate from "templates/LoggedUserTemplate";
import Container from "components/Container";
import Table from "components/Table";

const MeasurementsView = () => {
  return (
    <LoggedUserTemplate>
      <Container col="2">Measurements</Container>
      <Container col="2">
        <Table />
      </Container>
    </LoggedUserTemplate>
  );
};

export default MeasurementsView;
