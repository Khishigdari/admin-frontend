import { CategoryType, Foodtype } from "@/lib/types";
import { AddDishComp } from "./AddDishComp";
// import EditDishDialog from "./EditDishDialog";

export const CategorizedFoods = ({
  foods,
  category,
  refetchFoods,
}: {
  foods: Foodtype[];
  category: CategoryType;
  refetchFoods: () => Promise<void>;
}) => {
  console.log(
    category.name,
    foods.map((food) => food.name)
  );
  return (
    <div className="p-4 rounded-lg bg-white mb-5">
      <h4 className="text-5 leading-7 font-semibold mb-4 flex gap-2">
        {category.name} <p>({foods.length})</p>
      </h4>

      <div className="flex flex-wrap gap-5">
        <AddDishComp
          categoryId={category._id}
          refetchFoods={refetchFoods}
          category={category}
        />
        {/* {foods.map((food: Foodtype) => (
          <div key={food._id}>
            <div className="flex flex-wrap gap-4"> */}
        {foods?.map((food) => (
          <div
            key={food._id}
            className="w-67.5 h-60 p-4 border border-border rounded-[20px] flex flex-col gap-5"
          >
            <div className="w-full h-[129px] rounded-xl  overflow-hidden relative">
              {food.image ? (
                <div>
                  <img src={food.image} alt="" className="bg-gray-200" />
                </div>
              ) : (
                ""
              )}
              {/* <EditDishDialog /> */}
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
        {/* </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};
