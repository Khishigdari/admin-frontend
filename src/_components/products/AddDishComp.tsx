"use client";
import React, { ChangeEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/_components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { CategoryType } from "@/lib/types";

export const AddDishComp = ({
  categoryId,
  refetchFoods,
  category,
}: {
  categoryId: string;
  refetchFoods: () => Promise<void>;
  category: CategoryType;
}) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [ingredients, setIngredients] = useState<string>("");
  const [image, setImage] = useState<File | undefined>();
  const [preview, setPreview] = useState<string>();
  const [open, setOpen] = useState<boolean>(closed);

  const addFoodHandler = async () => {
    if (!name || !price || !image || !ingredients) {
      alert("All fields are required");
      return;
    }

    const form = new FormData();
    form.append("name", name);
    form.append("price", String(price));
    form.append("image", image); //File object (can be asd inside the "")
    form.append("ingredients", ingredients);
    form.append("categoryId", categoryId);

    try {
      const response = await fetch(
        "https://food-be-next.vercel.app/api/foods",
        {
          method: "POST",
          body: form,
        }
      );

      const data = await response.json();
      if (response.ok) {
        await refetchFoods();
        setOpen(false);
        setName("");
        setPrice(0);
        setImage(undefined);
        setIngredients("");
      } else {
        alert(data.error || "Failed to create food!");
      }
    } catch (error) {
      alert("Failed to create food!");
    }
  };

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
    setName(e.target.value);
  };
  const priceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };
  const ingredientsChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIngredients(e.target.value);
  };
  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      const filePreview = URL.createObjectURL(e.target.files[0]);
      setPreview(filePreview);
      console.log(preview);
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div>
            <Button
              variant="outline"
              className="border border-dashed rounded-[20px] border-[#EF4444] w-67.5 h-60 py-2 px-4 flex flex-col gap-6 justify-center items-center"
            >
              <p
                onClick={() => {
                  setOpen(true);
                }}
                className="btn h-10 w-10 bg-[#EF4444] rounded-full text-[#FAFAFA]"
              >
                +
              </p>
              <p className="text-[#18181B] text-[14px] leading-5 font-medium">
                Add new Dish to {category.name}
              </p>
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[460px]">
          <DialogHeader>
            <DialogTitle className="mb-5 text-[18px] leading-7 font-semibold">
              Add new Dish to Appetizers
            </DialogTitle>
          </DialogHeader>
          <div className=" gap-6 flex">
            <div className="grid gap-3">
              <Label className=" text-[14px] leading-3.5 font-medium">
                Food name
              </Label>
              <Input
                id="name"
                name="name"
                onChange={nameChangeHandler}
                className="input border border-[#E4E4E7] w-[194px] rounded-[6px]"
                placeholder="Type food name"
              />
            </div>
            <div className="grid gap-3">
              <Label className=" text-[14px] leading-3.5 font-medium">
                Food price
              </Label>
              <Input
                id="price"
                name="price"
                type="number"
                onChange={priceChangeHandler}
                className="input border border-[#E4E4E7] w-[194px] rounded-[6px]"
                placeholder="Enter price..."
              />
            </div>
          </div>
          <div className="grid gap-3">
            <Label className=" text-[14px] leading-3.5 font-medium">
              Ingredients
            </Label>
            <Textarea
              id="ingredients"
              name="ingredients"
              defaultValue={ingredients}
              className="textarea border border-[#E4E4E7] w-[412px] rounded-[6px]"
              placeholder="List ingredients..."
              onChange={ingredientsChangeHandler}
            />
          </div>
          <div className="grid gap-3">
            <legend className=" text-[14px] leading-3.5 font-medium">
              Food image
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
                className="opacity-0"
              />
              <img src="./image.svg" />
              <p className="text-[14px] leading-5 font-medium">
                Choose a file or drag & drop it here
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              className="btn btn-neutral mt-8 w-fit py-2 px-4 text-[14px] leading-5 font-medium rounded-[6px]"
              onClick={addFoodHandler}
            >
              Add Dish
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
