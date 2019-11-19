import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import firebase from "config/firebase";

export const FirebaseAuthContext = createContext();

const FirebaseAuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  return (
    <FirebaseAuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

FirebaseAuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default FirebaseAuthProvider;
