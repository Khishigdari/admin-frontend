import { Truck } from "lucide-react";
import React from "react";

export const SideBar = () => {
  return (
    <div className="bg-white w-1/6 h-screen mr-6 py-9 px-5 flex flex-col items-center">
      <img src="./adminLogo.svg" className="h-11 mb-10" />
      <div className="flex flex-col items-center">
        <button className="btn btn-neutral px-6 rounded-full flex gap-[10px] w-[165px] mb-6">
          <img src="./foodMenuIcon.svg" /> Food menu
        </button>
        <button className="flex gap-[10px]  px-6 rounded-full  w-[165px] btn btn-ghost">
          <Truck /> Orders
        </button>
      </div>
    </div>
  );
};
