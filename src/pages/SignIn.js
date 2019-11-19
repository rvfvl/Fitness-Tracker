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

const SignIn = () => {
  const [signUserInUsingFirebase, , , errorMessage] = useFirebaseAuth();

  const [handleSubmit, handleChange, { Email, Password }, error] = useForm(
    () => signUserInUsingFirebase(Email.value, Password.value),
    {
      Email: { value: "", isRequired: true },
      Password: { value: "", isRequired: true }
    }
  );

  const { currentUser } = useContext(FirebaseAuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <LoginForm>
        <Title>Sign In</Title>
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            type="text"
            name="Email"
            defaultValue={Email.value}
          />
          <Input
            onChange={handleChange}
            type="password"
            name="Password"
            defaultValue={Password.value}
          />
          <Link to="/signup">Don&apos;t have an account? Sign up here!</Link>
          <Button type="submit">Sign In</Button>
        </form>
        {errorMessage.message && <Badge danger>{errorMessage.message}</Badge>}
        {error !== "" && <Badge danger>{error}</Badge>}
      </LoginForm>
    </>
  );
};

export default SignIn;
