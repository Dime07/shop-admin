import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-w-full bg-white">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="p-5 ">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
