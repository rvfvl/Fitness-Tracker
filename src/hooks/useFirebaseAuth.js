import { useState } from "react";
import firebase from "config/firebase";
import { useHistory } from "react-router-dom";

const useFirebaseAuth = () => {
  const history = useHistory();

  const [errorMessage, setErrorMessage] = useState({
    isError: false
  });

  const signUserInUsingFirebase = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      setErrorMessage({ isError: true, message: error.message });
    }
  };

  const createUserUsingFirebase = async (email, password, username) => {
    try {
      const auth = firebase.auth();

      await auth.createUserWithEmailAndPassword(email, password);
      await auth.currentUser.updateProfile({ displayName: username });

      history.push("/");
    } catch (error) {
      setErrorMessage({ isError: true, message: error.message });
    }
  };

  const signOutUser = () => firebase.auth().signOut();

  const sendResetPasswordEmail = email => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        setErrorMessage({
          isError: true,
          message: "Email with password reset has been sent.",
          type: "success"
        })
      )
      .catch(error =>
        setErrorMessage({
          isError: true,
          message: error.message,
          type: "failure"
        })
      );
  };

  return {
    signUserInUsingFirebase,
    createUserUsingFirebase,
    signOutUser,
    errorMessage,
    sendResetPasswordEmail
  };
};

export default useFirebaseAuth;
