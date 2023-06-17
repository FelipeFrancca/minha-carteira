import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/components/styles/GlobalStyles";

import Layout from "./assets/components/Tools/Layout/layout";
//import Dashboard from "./pages/Dashboard/Dashboard";
import List from "./pages/List/List";
import dark from "./assets/components/styles/themes/dark"

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
      <List/>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
