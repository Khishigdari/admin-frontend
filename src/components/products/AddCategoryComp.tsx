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
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export const AddCategoryComp = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");
  // const [newCategories, setNewCategories] = useState<string | undefined>();
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
  };

  const deleteCategoryHandler = async (categories: string) => {
    await fetch("http://localhost:4000/api/categories/delete", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categories),
    });
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
          <Badge
            variant="outline"
            key={id}
            className="w-fit px-4 py-2 rounded-full gap-3 text-[14px] leading-5 font-medium"
          >
            {category}
            <X
              className="hover:bg-red-500"
              onClick={() => deleteCategoryHandler(category)}
            />
          </Badge>
        ))}
        {/* <AddCategoryDialogComp /> */}
        <Dialog open={modalOpen}>
          <DialogTrigger asChild>
            <Badge
              onClick={() => setModalOpen(true)}
              variant={"outline"}
              className="py-2 px-4 rounded-full bg-[#EF4444] cursor-pointer"
            >
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
                type="text"
                placeholder="Type category name..."
                onKeyDown={handleKeyboardEvent}
                // onChange={categoryChangeHandler}
                // onChange={(e) => setNewCategory(e.target.value)}
                onChange={newCategoryNameChangeHandler}
              />
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  className="w-fit mt-6 leading-5"
                  type="submit"
                  onClick={createCategoryHandler}
                >
                  Add category
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
