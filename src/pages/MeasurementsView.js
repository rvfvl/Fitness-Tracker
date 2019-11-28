import React from "react";
import LoggedUserTemplate from "templates/LoggedUserTemplate";
import useCollection from "hooks/useCollection";
import useForm from "hooks/useForm";
import Container from "components/Container";
import Table from "components/Table";
import LineChart from "components/LineChart";
import Input from "components/Input";
import Button from "components/Button";
import Badge from "components/Badge";
import LoadingSpinner from "components/LoadingSpinner";
import Title from "components/Title";

const MeasurementsView = () => {
  const { data, loading, addNewDatabaseRecord, deleteDocument } = useCollection(
    "measurements"
  );

  const [handleSubmit, handleChange, values, error] = useForm(
    () => addNewDatabaseRecord(values),
    {
      Weight: { value: "", isRequired: true },
      Chest: { value: "", isRequired: true },
      Waist: { value: "", isRequired: true },
      Hip: { value: "", isRequired: true },
      Biceps: { value: "", isRequired: true },
      Thigh: { value: "", isRequired: true },
      Forearm: { value: "", isRequired: true }
    }
  );

  return (
    <LoggedUserTemplate>
      <Container col="2">
        {!data.length ? (
          <Title fontSize="36px">
            You need at least one measurement record to produce a graph.
          </Title>
        ) : (
          <LineChart data={data} />
        )}
      </Container>
      <Container col="2">
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", marginBottom: ".5rem", flexWrap: "wrap" }}
        >
          <Input
            type="number"
            step="0.1"
            min="1"
            name="Weight"
            placeholder="Weight (kg)"
            onChange={handleChange}
            value={values.Weight.value}
          />
          <Input
            type="number"
            step="0.1"
            min="1"
            name="Chest"
            placeholder="Chest (cm)"
            onChange={handleChange}
            value={values.Chest.value}
          />
          <Input
            type="number"
            step="0.1"
            min="1"
            name="Waist"
            placeholder="Waist (cm)"
            onChange={handleChange}
            value={values.Waist.value}
          />
          <Input
            type="number"
            step="0.1"
            min="1"
            name="Hip"
            placeholder="Hip (cm)"
            onChange={handleChange}
            value={values.Hip.value}
          />
          <Input
            type="number"
            step="0.1"
            min="1"
            name="Biceps"
            placeholder="Biceps (cm)"
            onChange={handleChange}
            value={values.Biceps.value}
          />
          <Input
            type="number"
            step="0.1"
            min="1"
            name="Thigh"
            placeholder="Thigh (cm)"
            onChange={handleChange}
            value={values.Thigh.value}
          />
          <Input
            type="number"
            step="0.1"
            min="1"
            name="Forearm"
            placeholder="Forearm (cm)"
            onChange={handleChange}
            value={values.Forearm.value}
          />
          <div style={{ flexBasis: "100%", margin: ".5rem 0" }}>
            <Button type="submit">Add new record</Button>
          </div>
        </form>
        {error !== "" && <Badge danger>{error}</Badge>}

        {loading ? (
          <LoadingSpinner
            type="Triangle"
            color="#00BFFF"
            height={100}
            width={100}
          />
        ) : (
          <Table data={data} deleteDocument={deleteDocument} />
        )}
      </Container>
    </LoggedUserTemplate>
  );
};

export default MeasurementsView;
