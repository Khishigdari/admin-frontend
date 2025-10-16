"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Badge } from "../ui/badge";
// import { AddCategoryDialogComp } from "./AddCategoryDialogComp";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/_components/ui/dialog";
// import { DialogClose } from "@radix-ui/react-dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { CategoryType } from "@/lib/types";

export const AddCategoryComp = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [newCategory, setNewCategory] = useState<string | undefined>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const getCategories = async () => {
    const result = await fetch("http://localhost:4000/api/categories");
    const responseData = await result.json();
    const { data } = responseData;
    setCategories(data);
    console.log(data, "data");
    setCategories(data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  const newCategoryNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value);
  };

  const createCategoryHandler = async () => {
    await fetch("http://localhost:4000/api/categories", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newCategory }),
    });
    setModalOpen(false);

    await getCategories();
    // setInputCategory("");
  };

  const deleteCategoryHandler = async (categoryId: string) => {
    console.log("delete called");
    await fetch("http://localhost:4000/api/categories/delete", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryId }),
    });
    await getCategories();
  };

  const handleKeyboardEvent = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      createCategoryHandler();
    }
  };

  return (
    <div className="mb-6 w-293 p-6 rounded-lg bg-white">
      <h4 className="text-5 leading-7 font-semibold mb-4">Dishes Category</h4>
      <div className="flex gap-3">
        {categories.map((category, id) => (
          <div
            key={id}
            className=" border-2 rounded-full w-fit px-4 py-1 flex items-center gap-3 text-[14px] leading-5 font-medium active:border-red-500"
          >
            {category.name}
            <X
              className="hover:text-red-500 w-4 h-4"
              onClick={() => deleteCategoryHandler(category._id)}
            />
          </div>
        ))}
        {/* <AddCategoryDialogComp /> */}
        <Dialog>
          <DialogTrigger asChild>
            <Badge
              variant={"outline"}
              className="py-2 px-4 rounded-full w-9 h-9 bg-[#EF4444] cursor-pointer"
            >
              {/* <Plus className="text-white h-4" /> */}
              <p className="text-[14px] leading-5 text-white">+</p>
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
                type="text"
                placeholder="Type category name..."
                onKeyDown={handleKeyboardEvent}
                // onChange={categoryChangeHandler}
                // onChange={(e) => setNewCategory(e.target.value)}
                onChange={newCategoryNameChangeHandler}
              />
            </DialogHeader>
            <DialogFooter>
              {/* <DialogClose asChild>
                <Button variant="secondary" className="rounded-full">
                  <X />
                </Button>
              </DialogClose> */}
              <Button
                className="w-fit mt-6 leading-5"
                type="submit"
                onClick={createCategoryHandler}
              >
                Add category
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
