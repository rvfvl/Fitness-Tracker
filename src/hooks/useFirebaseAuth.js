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

  const createUserUsingFirebase = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      setErrorMessage({ isError: true, message: error.message });
    }
  };

  const signOutUser = () => firebase.auth().signOut();

  return [
    signUserInUsingFirebase,
    createUserUsingFirebase,
    signOutUser,
    errorMessage
  ];
};

export default useFirebaseAuth;
