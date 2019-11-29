import React, { useContext } from "react";
import useForm from "hooks/useForm";
import useFirebaseAuth from "hooks/useFirebaseAuth";
import { FirebaseAuthContext } from "context/FirebaseAuthProvider";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import Title from "components/Title";
import Input from "components/Input";
import Button from "components/Button";
import Badge from "components/Badge";

const ResetPasswordWrapper = styled.div`
  position: absolute;
  background-color: #fff;
  min-height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 2rem;
  box-shadow: ${({ theme }) => theme.shadows.container};
`;

const ResetPassword = () => {
  const { currentUser } = useContext(FirebaseAuthContext);
  const { sendResetPasswordEmail, errorMessage } = useFirebaseAuth();

  const [handleSubmit, handleChange, values, error] = useForm(
    () => sendResetPasswordEmail(values.Email.value),
    { Email: { value: "", isRequired: true } }
  );

  const showError = () => {
    let errorType = null;

    if (errorMessage.isError) {
      if (errorMessage.type === "success") {
        errorType = <Badge success>{errorMessage.message}</Badge>;
      } else {
        errorType = <Badge danger>{errorMessage.message}</Badge>;
      }
    }
    return errorType;
  };

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <ResetPasswordWrapper>
      <Title>Reset Password</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="Email"
          defaultValue={values.Email.value}
          onChange={handleChange}
        />
        <Button type="submit" style={{ marginTop: "1rem" }}>
          Reset Password
        </Button>
      </form>
      {error && <Badge danger>{error}</Badge>}
      {!error && showError()}
    </ResetPasswordWrapper>
  );
};

export default ResetPassword;
