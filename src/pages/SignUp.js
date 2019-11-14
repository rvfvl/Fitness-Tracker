import React from "react";
import LoginForm from "components/LoginForm";
import Input from "components/Input";
import Button from "components/Button";
import Title from "components/Title";
import Link from "components/Link";

const SignUp = () => {
  return (
    <>
      <LoginForm>
        <Title>Sign Up</Title>
        <form>
          <Input type="text" name="Email" />
          <Input type="password" name="Password" />
          <Link to="/signin">Already registered? Sign in here!</Link>
          <Button type="submit">Sign Up</Button>
        </form>
      </LoginForm>
    </>
  );
};

export default SignUp;
