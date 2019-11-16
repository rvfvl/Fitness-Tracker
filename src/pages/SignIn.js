import React, { useContext } from "react";
import { FirebaseAuthContext } from "context/FirebaseAuthProvider";
import firebase from "config/firebase";
import useForm from "hooks/useForm";
import LoginForm from "components/LoginForm";
import Input from "components/Input";
import Button from "components/Button";
import Title from "components/Title";
import Link from "components/Link";

const SignIn = () => {
  const test = useContext(FirebaseAuthContext);
  console.log(test);

  const signUserInUsingFirebase = (email, password) =>
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => console.log("Logged In", user))
      .catch(error => console.log(error));

  const [handleSubmit, handleChange, values] = useForm(() =>
    signUserInUsingFirebase(values.Email, values.Password)
  );

  return (
    <>
      <LoginForm>
        <Title>Sign In</Title>
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            type="text"
            name="Email"
            defaultValue={values.Email}
          />
          <Input
            onChange={handleChange}
            type="password"
            name="Password"
            defaultValue={values.Password}
          />
          <Link to="/signup">Don&apos;t have an account? Sign up here!</Link>
          <Button type="submit">Sign In</Button>
        </form>
      </LoginForm>
    </>
  );
};

export default SignIn;
