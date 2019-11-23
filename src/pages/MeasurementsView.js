import React from "react";
import LoggedUserTemplate from "templates/LoggedUserTemplate";
import Container from "components/Container";
import Table from "components/Table";
import LineChart from "components/LineChart";

const MeasurementsView = () => {
  return (
    <LoggedUserTemplate>
      <Container col="2">
        <LineChart />
      </Container>
      <Container col="2">
        <Table />
      </Container>
    </LoggedUserTemplate>
  );
};

export default MeasurementsView;
