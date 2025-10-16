import React from "react";

// export const Header = ({ className }: { classname: string }) => {
export const Header = () => {
  // const commonStyle = className + "my-6 max-w-[1170px] flex justify-end";
  return (
    <div className="my-6 min-w-[1170px] flex justify-end">
      <img src="./user.svg" />
    </div>
  );
};
