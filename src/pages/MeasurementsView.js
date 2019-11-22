import React from "react";
import LoggedUserTemplate from "templates/LoggedUserTemplate";
import Container from "components/Container";

const MeasurementsView = () => {
  return (
    <LoggedUserTemplate>
      <Container col="2">Measurements</Container>
      <Container col="2">Measurements</Container>
    </LoggedUserTemplate>
  );
};

export default MeasurementsView;
