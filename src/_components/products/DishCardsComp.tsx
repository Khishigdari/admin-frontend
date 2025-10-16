"use client";
import { useEffect, useState } from "react";
import EditDishDialog from "./EditDishDialog";
import { Foodtype } from "@/lib/types";

export const AddFoodCardsComp = () => {
  const [foods, setFoods] = useState<Foodtype[]>([]);

  const getFoods = async () => {
    const result = await fetch("http://localhost:4000/api/foods");
    const responseData = await result.json();
    const { foods } = responseData;
    setFoods(foods);
    console.log(foods, "data");
    console.log(responseData);
  };
  useEffect(() => {
    getFoods();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {foods?.map((food) => (
        <div
          key={food._id}
          className="w-67.5 p-4 border border-border rounded-[20px] flex flex-col gap-5"
        >
          <div className="w-full h-[129px] rounded-xl  overflow-hidden relative">
            {food.image ? (
              <div>
                <img src={food.image} alt="" className="bg-gray-200" />
              </div>
            ) : (
              ""
            )}
            <EditDishDialog />
            {/* <EditDishDialog {...getFoods}/> */}
            {/* getFoods={getFoods()}  */}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <div className="text-sm leading-5 font-medium text-red-500 flex-1 items-center">
                {food.name}
              </div>
              <div className="text-xs leading-4 text-foreground">
                ${food.price}
              </div>
            </div>
            <div className="text-xs leading-4 text-foreground">
              {food.ingredients}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
