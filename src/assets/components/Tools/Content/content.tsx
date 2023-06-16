import React, { ReactNode } from "react";
import { StyleConfig } from "./StyleConfig";

interface ContentProps {
  children: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <StyleConfig>
      {children}
    </StyleConfig>
  );
}

export default Content;
