"use client";
import React, { ChangeEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import { AddFoodCardsComp } from "./DishCardsComp";
// import { addFoodHandler } from "../_utils/add-food-util";

export const AddDishComp = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [ingredients, setIngredients] = useState<string>("");
  const [image, setImage] = useState<File | undefined>();
  const [category, setCategory] = useState<string>("");
  const [preview, setPreview] = useState<string>();

  // const addFoodHandler = () => {
  //   // console.log({ name });
  //   // console.log({ price });
  //   fetch("http://localhost:4000/create-food", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ price, name, ingredients, image }),
  //   });
  //   // console.log();
  // };

  //add-food-utils==========
  const addFoodHandler = async () => {
    if (!name || !price || !image || !ingredients || !category) {
      alert("All fields are required");
      return;
    }

    const form = new FormData();
    form.append("name", name);
    form.append("price", String(price));
    form.append("image", image); //File object (can be asd inside the "")
    form.append("ingredients", ingredients);
    form.append("category", category);

    try {
      const response = await fetch("http://localhost:4000/api/foods", {
        method: "POST",
        body: form,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Food created successfully!");
        setName("");
        setPrice(0);
        setImage(undefined);
        setIngredients("");
        setCategory("");
      } else {
        alert(data.error || "Failed to create food!");
      }
    } catch (error) {
      alert("Failed to create food!");
    }
  };
  //==========

  // addFoodHandler(name, price, image, ingredients, category)

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
  const categoryChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  // function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
  //   const file = e.target.files[0];
  //   const filePreview = URL.createObjectURL(file);
  //   setPreview(filePreview);
  // }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <p className="btn h-10 w-10 bg-[#EF4444] rounded-full text-[#FAFAFA]">
            +
          </p>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[460px]">
          <DialogHeader>
            <DialogTitle className="mb-5 text-[18px] leading-7 font-[600]">
              Add new Dish to Appetizers
            </DialogTitle>
          </DialogHeader>
          <div className=" gap-6 flex">
            <div className="grid gap-3">
              <Label className=" text-[14px] leading-[14px] font-[500]">
                Food name
              </Label>
              <Input
                id="name"
                name="name"
                defaultValue={name}
                // value={name}
                onChange={nameChangeHandler}
                // type="text"
                className="input border border-[#E4E4E7] w-[194px] rounded-[6px]"
                placeholder="Type food name"
              />
            </div>
            <div className="grid gap-3">
              <Label className=" text-[14px] leading-[14px] font-[500]">
                Food price
              </Label>
              <Input
                id="price"
                name="price"
                type="number"
                defaultValue={""}
                // value={price}
                onChange={priceChangeHandler}
                className="input border border-[#E4E4E7] w-[194px] rounded-[6px]"
                placeholder="Enter price..."
              />
            </div>
          </div>
          <div className="grid gap-3">
            <Label className=" text-[14px] leading-[14px] font-[500]">
              Ingredients
            </Label>
            <Textarea
              id="ingredients"
              name="ingredients"
              defaultValue={ingredients}
              // type="text"
              className="textarea border border-[#E4E4E7] w-[412px] rounded-[6px]"
              placeholder="List ingredients..."
              onChange={ingredientsChangeHandler}
            />
          </div>
          <div className="grid gap-3">
            <legend className=" text-[14px] leading-[14px] font-[500]">
              Food image
            </legend>
            <div className="border border-dashed border-[#2563EB33] bg-[#2563EB0D] pb-[39px] rounded-[6px] flex flex-col items-center justify-center relative gap-2">
              {/* <div className="grid w-full max-w-sm items-center gap-3 absolute inset-0 opacity-0"> */}
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
                  // width={100}
                  // height={50}
                  className="absolute inset-0 h-full w-full object-cover rounded-[6px]"
                />
                // <button className="absolute right-3 top-0 text-gray-300 hover:text-white" onClick={setPreview("")}>
                //   x
                // </button>
                // <Button className="text-red-500 z-30">x</Button>
              )}
              <Input
                id="picture"
                type="file"
                onChange={fileChangeHandler}
                className="opacity-0"
              />
              {/* </div> */}
              <img src="./image.svg" />
              <p className="text-[14px] leading-5 font-medium">
                Choose a file or drag & drop it here
              </p>
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              name="category"
              value={category}
              onChange={categoryChangeHandler}
            />
          </div>
          <div className="flex justify-end">
            <Button
              className="btn btn-neutral mt-8 w-fit py-2 px-4 text-[14px] leading-5 font-medium rounded-[6px]"
              onClick={addFoodHandler}
            >
              Add Dish
              {/* <AddFoodCardsComp /> */}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {/* <AddDishComp name={name} price={price} image={image} ingredients={ingredients} category={category}/> */}
    </div>
  );
};
