import { useState } from "react";

const useForm = (callback, initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    setError("");

    const isEmptyField = Object.values(values).some(
      ({ value, isRequired }) => value === "" && isRequired
    );

    if (!isEmptyField ? callback() : setError("Fields cannot be empty"));
  };

  const handleChange = event => {
    event.persist();
    setValues(prevState => ({
      ...prevState,
      [event.target.name]: {
        value: event.target.value,
        isRequired: prevState[event.target.name].isRequired
      }
    }));
  };

  return [handleSubmit, handleChange, values, error];
};

export default useForm;
