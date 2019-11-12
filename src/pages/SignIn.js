import React from "react";
import LoginForm from "components/LoginForm";
import Input from "components/Input";

const SignIn = () => {
  return (
    <>
      <LoginForm>
        <form>
          <Input type="text" name="Email" />
          <Input type="password" name="Password" />
          <input type="submit" value="WyLSIJ" />
        </form>
      </LoginForm>
    </>
  );
};

export default SignIn;
