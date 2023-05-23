import React from "react";
import { Gridlayout } from "./StyleConfig";

import Header from "../Mainheader/mainheader";
import Aside from "../Aside/Aside";
import Content from "../Content/content";

const Layout: React.FC = () => {
  return (
    <Gridlayout>
      <Header />
      <Aside/>
      <Content />
    </Gridlayout>
  );
};

export default Layout;
