import React from "react";
import { Gridlayout } from "./Container";

import Header from "../Mainheader/mainheader";
import Aside from "../Aside/aside";
import Content from "../Content/content";

const Layout: React.FC = () => {
  return (
    <Gridlayout>
      <Header />
      <Aside />
      <Content />
    </Gridlayout>
  );
};

export default Layout;
