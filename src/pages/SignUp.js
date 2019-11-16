import React from "react";
import firebase from "config/firebase";
import useForm from "hooks/useForm";
import LoginForm from "components/LoginForm";
import Input from "components/Input";
import Button from "components/Button";
import Title from "components/Title";
import Link from "components/Link";

const SignUp = () => {
  const createUserUsingFirebase = (email, password) =>
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => console.log("User Created", user))
      .catch(error => console.log(error));

  const [handleSubmit, handleChange, values] = useForm(() =>
    createUserUsingFirebase(values.Email, values.Password)
  );

  return (
    <>
      <LoginForm>
        <Title>Sign Up</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="Email"
            onChange={handleChange}
            defaultValue={values.Email}
          />
          <Input
            type="password"
            name="Password"
            onChange={handleChange}
            defaultValue={values.Password}
          />
          <Link to="/signin">Already registered? Sign in here!</Link>
          <Button type="submit">Sign Up</Button>
        </form>
      </LoginForm>
    </>
  );
};

export default SignUp;
