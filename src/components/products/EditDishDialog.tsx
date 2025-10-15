"use client";

import React, { useState } from "react";
import { Pen, Trash } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { CategoryType, Foodtype } from "@/app/products/page";

const EditDishDialog = () => {
  const [preview, setPreview] = useState<string>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [foods, setFoods] = useState<Foodtype[]>([]);

  const editFoods = async () => {
    const result = await fetch("http://localhost:4000/api/foods", {
      method: "PUT",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ foods }),
    });
    setFoods(foods);
  };

  const deleteFoodHandler = async (categoryId: string) => {
    await fetch("http://localhost:4000/api/foods/delete", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryId }),
    });
    await setFoods();
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            onClick={editFoods}
            className="bg-white rounded-full absolute bottom-5 right-5"
          >
            <Pen className="text-red-500"></Pen>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[460px] p-6 ">
          <DialogHeader>
            <DialogTitle className="mb-5 text-[18px] leading-7 font-[600]">
              Dishes info
            </DialogTitle>
          </DialogHeader>
          {/* <div className=" gap-6 flex"> */}
          <div className="flex gap-4 items-start  justify-between">
            <Label className=" text-xs text-muted-foreground leading-4 font-[400]">
              Dish name
            </Label>
            <Input
              id="name"
              name="name"
              // defaultValue={name}
              // onChange={nameChangeHandler}
              className="input border border-[#E4E4E7] w-72 rounded-[6px] justify-end"
              placeholder="Type food name"
            />
          </div>
          {categories?.length > 0 && (
            <div>
              <Label className=" text-xs text-muted-foreground leading-4 font-[400]">
                Dish category
              </Label>
              <Select onValueChange={(value) => setSelectedCategory(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => {
                    return (
                      <SelectItem key={category._id} value={category._id}>
                        {category.name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          )}
          <div className="flex gap-4 items-start justify-between">
            <Label className=" text-xs text-muted-foreground leading-4 font-[400]">
              Price
            </Label>
            <Input
              id="price"
              name="price"
              type="number"
              defaultValue={""}
              // onChange={priceChangeHandler}
              className="input border border-[#E4E4E7] w-72 rounded-[6px]"
              placeholder="Enter price..."
            />
          </div>
          {/* </div> */}
          <div className="flex gap-4 items-star  justify-between">
            <Label className=" text-xs text-muted-foreground leading-4 font-[400]">
              Ingredients
            </Label>
            <Textarea
              id="ingredients"
              name="ingredients"
              // defaultValue={ingredients}
              className="textarea border border-[#E4E4E7] w-72 rounded-[6px]"
              placeholder="List ingredients..."
              // onChange={ingredientsChangeHandler}
            />
          </div>
          <div className="flex gap-4 items-start  justify-between">
            <legend className=" text-xs text-muted-foreground leading-4 font-[400]">
              Image
            </legend>
            <div className="border border-dashed border-[#2563EB33] bg-[#2563EB0D] pb-[39px] rounded-[6px] flex flex-col items-center justify-center relative gap-2">
              <Label
                htmlFor="picture"
                className="grid w-full max-w-sm items-center gap-3 absolute inset-0 opacity-0"
              >
                picture
              </Label>
              {preview && (
                <img
                  src={preview}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover rounded-[6px]"
                />
              )}
              <Input
                id="picture"
                type="file"
                // onChange={fileChangeHandler}
                className="opacity-0 w-72"
              />
              <img src="./image.svg" />
              <p className="text-[14px] leading-5 font-medium">
                Choose a file or drag & drop it here
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex justify-start">
              <Button
                className="border border-red-500 mt-8 py2 px-4"
                variant={"outline"}
              >
                <Trash
                  className="text-red-500 w-3 h-[13px]"
                  onClick={() => deleteFoodHandler()}
                ></Trash>
              </Button>
            </div>

            <div className="flex justify-end">
              <Button
                className="btn btn-neutral mt-8 w-fit py-2 px-4 text-[14px] leading-5 font-medium rounded-[6px]"
                // onClick={addFoodHandler}
              >
                Save changes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditDishDialog;
