import React from "react";
import LoggedUserTemplate from "templates/LoggedUserTemplate";
import useCollection from "hooks/useCollection";
import Container from "components/Container";
import Table from "components/Table";
import LineChart from "components/LineChart";

const MeasurementsView = () => {
  const { data, loading } = useCollection("measurements");

  console.log(data);

  return (
    <LoggedUserTemplate>
      <Container col="2">
        <LineChart data={data} />
      </Container>
      <Container col="2">
        {loading ? "loading" : <Table data={data} />}
      </Container>
    </LoggedUserTemplate>
  );
};

export default MeasurementsView;
