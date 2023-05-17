import React from "react";
import GlobalStyles from "./assets/components/styles/GlobalStyles";
import Dashboard from "./pages/Dashboard/Dashboard";
import Aside from "./pages/Dashboard/Aside";
import Content from "./pages/Dashboard/Content";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Dashboard />
    </>
  );
};

export default App;
