import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import theme from "config/theme";
import { ThemeProvider } from "styled-components";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import Dashboard from "pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
