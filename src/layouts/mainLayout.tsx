import React, { ReactNode } from "react";
import Sidebar from "./sidebar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-w-full bg-white">
      <Sidebar />
      <div className="p-4">{children}</div>
    </div>
  );
};

export default MainLayout;
