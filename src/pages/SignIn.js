import React from "react";
import useForm from "hooks/useForm";
import LoginForm from "components/LoginForm";
import Input from "components/Input";
import Button from "components/Button";
import Title from "components/Title";
import Link from "components/Link";

const SignIn = () => {
  const [handleSubmit, handleChange, values] = useForm();

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
