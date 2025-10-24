"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { Pen, Trash } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/_components/ui/dialog";
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
import { CategoryType, Foodtype } from "@/lib/types";

const EditDishDialog = ({
  food,
  categories,
  refetchFoods,
}: {
  food: Foodtype;
  categories: CategoryType[];
  refetchFoods: () => void;
}) => {
  // const EditDishDialog = () => {
  const [preview, setPreview] = useState<string>(food.image);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // const [category, setCategory] = useState<CategoryType[]>([]);
  const [foods, setFoods] = useState<Foodtype[]>([]);
  // const [update, setUpdate] = useState<Foodtype | null>(null);
  const [name, setName] = useState(food.name);
  const [price, setPrice] = useState<number | string>(food.price);
  const [ingredients, setIngredients] = useState(food.ingredients);
  const [image, setImage] = useState<File | undefined | string>();
  const [open, setOpen] = useState<boolean>(false);

  const getFoods = async () => {
    const result = await fetch("https://food-be-next.vercel.app/api/foods");
    const responseData = await result.json();
    const { foods } = responseData;
    setFoods(foods);
    console.log(foods, "data");
    console.log(responseData);
  };
  useEffect(() => {
    getFoods();
  }, []);
  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("daragdlaa");
    if (e.target.files) {
      setImage(e.target.files[0]);
      const filePreview = URL.createObjectURL(e.target.files[0]);
      setPreview(filePreview);
      console.log(preview);
    }
  };
  console.log({ image });
  console.log({ preview });

  const editFoodHandler = async () => {
    if (!selectedCategory) {
      alert("Please select a category!");
      return;
    }

    const form = new FormData();
    form.append("name", name);
    form.append("price", String(price));
    form.append("ingredients", ingredients);
    form.append("categoryId", selectedCategory);
    if (preview !== food.image && image) {
      form.append("image", image);
    } else {
      form.append("image", food.image);
    }
    // if (image) form.append("image", image);
    if (food._id) form.append("foodId", food._id);

    try {
      const response = await fetch(
        "https://food-be-next.vercel.app/api/foods/edit",
        {
          // http://localhost:4000/api/foods/edit
          method: "POST",
          // mode: "no-cors",
          body: form,
        }
      );
      // const result = await response.json();
      // console.log(result, "result");
      // const text = await response.text();
      // console.log("Server response:", text);

      // if (response.ok) {
      //   await refetchFoods();
      //   setOpen(false);
      //   setImage(undefined);
      //   console.log("Food updated successfully");
      // } else {
      //   alert("Update failed: " + text);
      // }
    } catch (err) {
      console.error("Error updating food:", err);
    }
  };

  // const deleteFoodHandler = async (_id: Foodtype[]) => {
  //   await fetch("https://food-be-next.vercel.app/api/foods/delete", {
  //     method: "POST",
  //     mode: "no-cors",

  //     body: JSON.stringify({ _id }),
  //   });
  //   await getFoods();
  // };
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            // onClick={editFoods}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input border border-[#E4E4E7] w-72 rounded-[6px] justify-end"
              placeholder="Type food name"
            />
          </div>
          {categories?.length > 0 && (
            <div className="flex gap-4 items-start justify-between">
              <Label className=" text-xs text-muted-foreground leading-4 font-[400]">
                Dish category
              </Label>
              <Select onValueChange={(value) => setSelectedCategory(value)}>
                <SelectTrigger className="w-72">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => {
                    return (
                      <SelectItem key={category._id} value={category.name}>
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
              defaultValue={price}
              onChange={(e) => setPrice(e.target.value)}
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
              defaultValue={ingredients}
              className="textarea border border-[#E4E4E7] w-72 rounded-[6px]"
              placeholder="List ingredients..."
              onChange={(e) => setIngredients(e.target.value)}
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
                onChange={fileChangeHandler}
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
                // onClick={() => deleteFoodHandler(_id)}
              >
                <Trash
                  className="text-red-500 w-3 h-[13px]"
                  // onClick={() => deleteFoodHandler}
                ></Trash>
              </Button>
            </div>

            <div className="flex justify-end">
              <Button
                className="btn btn-neutral mt-8 w-fit py-2 px-4 text-[14px] leading-5 font-medium rounded-[6px]"
                onClick={editFoodHandler}
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
