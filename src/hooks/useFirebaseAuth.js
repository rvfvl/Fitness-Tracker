import { useState } from "react";
import firebase from "config/firebase";

const useFirebaseAuth = () => {
  const [errorMessage, setErrorMessage] = useState({
    isError: false
  });

  const signUserInUsingFirebase = (email, password) =>
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => console.log("Logged In", user))
      .catch(error =>
        setErrorMessage({ isError: true, message: error.message })
      );

  const createUserUsingFirebase = (email, password) =>
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => console.log("User Created", user))
      .catch(error =>
        setErrorMessage({ isError: true, message: error.message })
      );

  const signOutUser = () => firebase.auth().signOut();

  return [
    signUserInUsingFirebase,
    createUserUsingFirebase,
    signOutUser,
    errorMessage
  ];
};

export default useFirebaseAuth;
