import React, { ReactNode } from "react";
import { SideBar } from "./SideBar";
import { Header } from "./Header";

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex size-fit">
      <SideBar />
      <div className="pl-6 ">
        <Header />
        {children}
      </div>
    </div>
  );
};
