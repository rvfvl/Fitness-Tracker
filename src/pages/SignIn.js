import React from "react";
import LoginForm from "components/LoginForm";
import Input from "components/Input";
import Button from "components/Button";
import Title from "components/Title";
import Link from "components/Link";

const SignIn = () => {
  return (
    <>
      <LoginForm>
        <Title>Sign In</Title>
        <form>
          <Input type="text" name="Email" />
          <Input type="password" name="Password" />
          <Link to="/signup">Don&apos;t have an account? Sign up here!</Link>
          <Button type="submit">Sign In</Button>
        </form>
      </LoginForm>
    </>
  );
};

export default SignIn;
