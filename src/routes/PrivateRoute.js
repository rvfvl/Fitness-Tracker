import React, { useContext } from "react";
import { FirebaseAuthContext } from "context/FirebaseAuthProvider";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, ...props }) => {
  const { currentUser } = useContext(FirebaseAuthContext);

  return (
    <Route
      {...props}
      render={restProps =>
        currentUser ? <Component {...restProps} /> : <Redirect to="/signin" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default PrivateRoute;
