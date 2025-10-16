import { LayoutDashboard, Link2, Truck } from "lucide-react";
import Link from "next/link";
import React from "react";

export const SideBar = () => {
  return (
    <div className="bg-white w-1/6 h-screen py-9 px-5 flex flex-col items-center">
      <a href="/">
        <img src="./adminLogo.svg" className="h-11 mb-10" />
      </a>
      <div className="flex flex-col items-center">
        <Link href="./products">
          <button className="btn btn-neutral focus:btn-neutral px-6 rounded-full flex gap-[10px] mb-6">
            <LayoutDashboard /> Food menu
          </button>
        </Link>
        <a href="./orders">
          <button className="flex gap-[10px] w-full px-9 rounded-full btn btn-neutral active:btn-neutral">
            <Truck /> Orders
          </button>
        </a>
      </div>
    </div>
  );
};
