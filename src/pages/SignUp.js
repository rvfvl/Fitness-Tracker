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

  const [
    handleSubmit,
    handleChange,
    { Email, Password, Username },
    error
  ] = useForm(
    () => createUserUsingFirebase(Email.value, Password.value, Username.value),
    {
      Email: { value: "", isRequired: true },
      Password: { value: "", isRequired: true },
      Username: { value: "", isRequired: true }
    }
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
            defaultValue={Email.value}
          />
          <Input
            type="password"
            name="Password"
            onChange={handleChange}
            defaultValue={Password.value}
          />
          <Input
            type="text"
            name="Username"
            onChange={handleChange}
            defaultValue={Username.value}
          />
          <Link to="/signin">Already registered? Sign in here!</Link>
          <Button type="submit">Sign Up</Button>
        </form>
        {errorMessage.message && <Badge danger>{errorMessage.message}</Badge>}
        {error !== "" && <Badge danger>{error}</Badge>}
      </LoginForm>
    </>
  );
};

export default SignUp;
