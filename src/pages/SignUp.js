import React, { useContext } from "react";
import { FirebaseAuthContext } from "context/FirebaseAuthProvider";
import { Redirect } from "react-router-dom";
import useFirebaseAuth from "hooks/useFirebaseAuth";
import useForm from "hooks/useForm";
import LoginForm from "components/LoginForm";
import Input from "components/Input";
import Button from "components/Button";
import Title from "components/Title";
import Link from "components/Link";
import Badge from "components/Badge";

const SignUp = () => {
  const [, createUserUsingFirebase, , errorMessage] = useFirebaseAuth();

  const [handleSubmit, handleChange, values] = useForm(
    () => createUserUsingFirebase(values.Email, values.Password),
    { Email: "", Password: "" }
  );

  const { currentUser } = useContext(FirebaseAuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

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
        {errorMessage.message && <Badge danger>{errorMessage.message}</Badge>}
      </LoginForm>
    </>
  );
};

export default SignUp;
