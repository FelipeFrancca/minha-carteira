import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/components/styles/GlobalStyles";
import Layout from "./assets/components/Tools/Layout/layout";
import dark from "./assets/components/styles/themes/dark"

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
