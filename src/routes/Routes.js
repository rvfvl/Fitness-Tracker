import React, { useContext } from "react";
import { FirebaseAuthContext } from "context/FirebaseAuthProvider";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "routes/PrivateRoute";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import Dashboard from "pages/Dashboard";
import MeasurementsView from "pages/MeasurementsView";
import ResetPassword from "pages/ResetPassword";
import LoadingSpinner from "components/LoadingSpinner";

const Routes = () => {
  const { loading } = useContext(FirebaseAuthContext);

  if (loading) {
    return (
      <LoadingSpinner
        type="Triangle"
        color="#00BFFF"
        height={100}
        width={100}
        pageLoader
      />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/measurements" component={MeasurementsView} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/reset" component={ResetPassword} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
