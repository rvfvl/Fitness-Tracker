import React from "react";
import theme from "config/theme";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import FirebaseAuthProvider from "context/FirebaseAuthProvider";
import Routes from "routes/Routes";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FAFAFA;
  }
`;

const App = () => {
  return (
    <FirebaseAuthProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </FirebaseAuthProvider>
  );
};

export default App;
