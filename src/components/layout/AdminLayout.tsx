import React, { ReactNode } from "react";
import { SideBar } from "./SideBar";
import { Header } from "./Header";

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex pr-10">
      <SideBar />
      <div className="">
        <Header />
        {children}
      </div>
    </div>
  );
};
