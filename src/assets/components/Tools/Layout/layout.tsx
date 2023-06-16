import React, { ReactNode } from "react";
import { Gridlayout } from "./StyleConfig";

import Header from "../Mainheader/mainheader";
import Aside from "../Aside/Aside";
import Content from "../Content/content";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Gridlayout>
      <Header />
      <Aside />
      <Content>
        {children}
      </Content>
    </Gridlayout>
  );
};

export default Layout;