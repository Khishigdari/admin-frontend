import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const AddDishComp = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="btn h-10 w-10 bg-[#EF4444] rounded-full text-[#FAFAFA]">
            +
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[460px]">
          <DialogHeader>
            <DialogTitle className="mb-5 text-[18px] leading-7 font-[600]">
              Add new Dish to Appetizers
            </DialogTitle>
          </DialogHeader>
          <div className=" gap-6 flex">
            <div className="grid gap-3">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-[14px] leading-[14px] font-[500]">
                  Food name
                </legend>
                <input
                  type="text"
                  className="input border border-[#E4E4E7] w-[194px] rounded-[6px]"
                  placeholder="Type food name"
                />
              </fieldset>
            </div>
            <div className="grid gap-3">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-[14px] leading-[14px] font-[500]">
                  Food price
                </legend>
                <input
                  type="text"
                  className="input border border-[#E4E4E7] w-[194px] rounded-[6px]"
                  placeholder="Enter price..."
                />
              </fieldset>
            </div>
          </div>
          <div className="grid gap-3">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-[14px] leading-[14px] font-[500]">
                Ingredients
              </legend>
              <input
                type="text"
                className="input border border-[#E4E4E7] w-[412px] rounded-[6px]"
                placeholder="List ingredients..."
              />
            </fieldset>
          </div>
          <div className="grid gap-3">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-[14px] leading-[14px] font-[500]">
                Food image
              </legend>
              <div className="border border-dashed border-[#2563EB33] bg-[#2563EB0D] py-[39px] rounded-[6px] flex flex-col items-center justify-center relative gap-2">
                <img src="./image.svg" />
                <p className="text-[14px] leading-5 font-[500]">
                  Choose a file or drag & drop it here
                </p>
                <input
                  type="file"
                  className="input   absolute opacity-0 inset-0 w-[412px] rounded-[6px] "
                  placeholder="List ingredients..."
                />
              </div>
            </fieldset>
          </div>
          <div className="flex justify-end">
            <button className="btn btn-neutral mt-8 w-[95px] py-2 px-4 text-[14px] leading-5 font-[500] ">
              Add Dish
            </button>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
};
