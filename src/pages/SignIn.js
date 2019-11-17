import React, { useContext } from "react";
import { FirebaseAuthContext } from "context/FirebaseAuthProvider";
import useFirebaseAuth from "hooks/useFirebaseAuth";
import useForm from "hooks/useForm";
import LoginForm from "components/LoginForm";
import Input from "components/Input";
import Button from "components/Button";
import Title from "components/Title";
import Link from "components/Link";
import Badge from "components/Badge";

const SignIn = () => {
  const test = useContext(FirebaseAuthContext);
  console.log(test);

  const [signUserInUsingFirebase, , , errorMessage] = useFirebaseAuth();

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
        {errorMessage.message ? <Badge /> : null}
      </LoginForm>
    </>
  );
};

export default SignIn;
