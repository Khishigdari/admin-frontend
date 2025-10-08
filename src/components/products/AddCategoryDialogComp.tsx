"use client";
import React, { ChangeEventHandler, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export const AddCategoryDialogComp = () => {
  // const [newCategory, setNewCategory] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");

  const createNewCategory = async () => {
    await fetch("http://localhost:4000/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newCategory }),
    });
    setNewCategory("");
  };
  // const categoryChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // console.log(e);
  //   setNewCategory(e.target.value);
  // };
  const handleKeyboardEvent = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      createNewCategory();
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Badge className="py-2 px-4 rounded-full bg-[#EF4444] cursor-pointer">
            <p className="text-[14px] leading-5">+</p>
          </Badge>
        </DialogTrigger>
        <DialogContent className="w-[460px] p-6">
          <DialogHeader>
            <DialogTitle className="text-[18px] leading-7 font-semibold mb-6">
              Add new category
            </DialogTitle>
            <Label className="mb-2 text-[14px] leading-[14px] font-medium">
              Category name
            </Label>
            <Input
              id="newCategory"
              name="newCategory"
              defaultValue={newCategory}
              placeholder="Type category name..."
              onKeyDown={handleKeyboardEvent}
              // onChange={categoryChangeHandler}
              onChange={(e) => setNewCategory(e.target.value)}
            />
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                className="w-fit mt-6 leading-5"
                type="submit"
                onClick={createNewCategory}
              >
                Add category
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
