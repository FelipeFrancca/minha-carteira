import React from "react";
import GlobalStyles from "./assets/styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Dashboard />
    </>
  );
};

export default App;
