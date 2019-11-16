import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import firebase from "config/firebase";

export const FirebaseAuthContext = createContext();

const FirebaseAuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  firebase.auth().onAuthStateChanged(user => setCurrentUser(user));

  return (
    <FirebaseAuthContext.Provider value={currentUser}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

FirebaseAuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default FirebaseAuthProvider;
