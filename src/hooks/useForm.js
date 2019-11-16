import { useState } from "react";

const useForm = callback => {
  const [values, setValues] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
    callback();
  };

  const handleChange = event => {
    event.persist();
    setValues(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  return [handleSubmit, handleChange, values];
};

export default useForm;
