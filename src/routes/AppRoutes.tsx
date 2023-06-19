import { Route, Routes } from "react-router-dom";
import Layout from "../assets/components/Tools/Layout/layout";

import Dashboard from "../pages/Dashboard/Dashboard";
import List from "../pages/List/List";

function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list/:type" element={<List />} />
      </Routes>
    </Layout>
  );
}

export default AppRoutes;
