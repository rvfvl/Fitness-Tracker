import React from "react";
import LoginForm from "components/LoginForm";
import Input from "components/Input";
import Button from "components/Button";

const SignIn = () => {
  return (
    <>
      <LoginForm>
        <form>
          <Input type="text" name="Email" />
          <Input type="password" name="Password" />
          <Button type="submit">Sign In</Button>
        </form>
      </LoginForm>
    </>
  );
};

export default SignIn;
