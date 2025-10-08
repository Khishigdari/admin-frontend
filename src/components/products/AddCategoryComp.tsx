"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { AddCategoryDialogComp } from "./AddCategoryDialogComp";

export const AddCategoryComp = () => {
  // const categories = ["All Dishes", "Appetizers", "Salads", "Pizzas"];
  const [categories, setCategories] = useState<string[]>([]);

  const getCategories = async () => {
    const result = await fetch("http://localhost:4000/categories", {
      method: "GET",
    });
    const responseData = await result.json();
    const { data } = responseData;
    setCategories(data);
    console.log(data, "data");
  };
  useEffect(() => {
    getCategories();
  }, []);

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
          </Badge>
        ))}
        <AddCategoryDialogComp />
      </div>
    </div>
  );
};
