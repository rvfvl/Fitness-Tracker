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
          <button type="submit">wys</button>
        </form>
      </LoginForm>
    </>
  );
};

export default SignIn;
