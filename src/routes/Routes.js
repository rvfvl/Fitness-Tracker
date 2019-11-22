import React, { useContext } from "react";
import { FirebaseAuthContext } from "context/FirebaseAuthProvider";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "routes/PrivateRoute";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import Dashboard from "pages/Dashboard";
import MeasurementsView from "pages/MeasurementsView";
import LoadingSpinner from "components/LoadingSpinner";

const Routes = () => {
  const { loading } = useContext(FirebaseAuthContext);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/measurements" component={MeasurementsView} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
