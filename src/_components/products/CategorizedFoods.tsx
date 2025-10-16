import { CategoryType, Foodtype } from "@/lib/types";
import { AddDishComp } from "./AddDishComp";
import { AddFoodCardsComp } from "./DishCardsComp";

export const CategorizedFoods = ({
  foods,
  category,
  refetchFoods,
}: {
  foods: Foodtype[];
  category: CategoryType;
  refetchFoods: () => Promise<void>;
}) => {
  return (
    <div className=" border-2 p-4 rounded-lg bg-white">
      <h2>{category.name}</h2>
      <div className="flex flex-wrap gap-2">
        <AddDishComp categoryId={category._id} refetchFoods={refetchFoods} />
        {foods.map((food: Foodtype) => (
          <div>
            <AddFoodCardsComp />
          </div>
        ))}
      </div>
    </div>
  );
};
