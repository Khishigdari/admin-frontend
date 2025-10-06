import React, { ReactNode } from "react";
import { SideBar } from "./SideBar";
import { Header } from "./Header";

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex pr-10 w-full relative">
      <SideBar />
      <div className="absolute right-0 mr-10">
        <Header />
        {children}
      </div>
    </div>
  );
};
