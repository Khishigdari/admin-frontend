"use client";
import React, { useEffect, useState } from "react";
import { CategoryType, Foodtype } from "@/lib/types";
import { AdminLayout } from "@/_components/layout/AdminLayout";
import { CategorizedFoods } from "@/_components/products";
import Categories from "@/_components/products/Categories";
import { Skeleton } from "@/components/ui/skeleton";

const Home = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [foods, setFoods] = useState<Foodtype[]>([]);
  const [categoryLoading, setCategoryLoading] = useState<boolean>(false);
  const [foodLoading, setFoodLoading] = useState<boolean>(false);

  // const route = useRouter();
  // const email = localStorage.getItem("userEmail");
  // if (!email) {
  //   route.push("/login");
  // }

  const getCategories = async () => {
    setCategoryLoading(true);
    const result = await fetch(
      "https://food-be-next.vercel.app/api/categories"
    );
    const responseData = await result.json();
    const { data } = responseData;
    setCategories(data);
    console.log(data, "data");
    setCategories(data);
    setCategoryLoading(false);
  };

  useEffect(() => {
    console.log("hello category =>", categories.length);
  }, [categories]);

  const getFoods = async () => {
    setFoodLoading(true);
    const result = await fetch("https://food-be-next.vercel.app/api/foods");
    const responseData = await result.json();
    const { foods } = responseData;
    setFoods(foods);
    console.log(foods, "data");
    console.log(responseData);
    setFoodLoading(false);
  };
  useEffect(() => {
    getCategories();
    getFoods();
  }, []);

  return (
    <div className="bg-secondary w-full h-full inter">
      <AdminLayout>
        <div>
          <div className="mb-6  p-6 rounded-lg bg-white">
            <h4 className="text-5 leading-7 font-semibold mb-4">
              Dishes Category
            </h4>
            {categoryLoading ? (
              <div className="flex gap-3 flex-wrap">
                {[1, 2, 3].map((c) => (
                  <Skeleton
                    key={c}
                    className=" border-2 rounded-full w-25 h-7 px-4 py-1 flex items-center gap-3 "
                  />
                ))}
              </div>
            ) : (
              <Categories
                categories={categories}
                getCategories={getCategories}
                foods={foods}
              />
            )}
          </div>
        </div>
        <div>
          {foodLoading ? (
            <div className="flex flex-col gap-5">
              {[1, 2].map((c) => (
                <Skeleton key={c} className="bg-white rounded-lg w-293 h-80" />
              ))}
            </div>
          ) : (
            categories.map((category) => {
              return (
                <div key={category._id}>
                  <CategorizedFoods
                    categories={categories}
                    refetchFoods={getFoods}
                    foods={foods.filter((food) => {
                      return food.categoryId._id == category._id;

                      // return true;
                    })}
                    category={category}
                  />
                </div>
              );
            })
          )}
          {/* {categories.map((category) => {
            return (
              <div key={category._id}>
                <CategorizedFoods
                  categories={categories}
                  refetchFoods={getFoods}
                  foods={foods.filter((food) => {
                    return food.categoryId._id == category._id;

                    // return true;
                  })}
                  category={category}
                />
              </div>
            );
          })} */}
        </div>
      </AdminLayout>
    </div>
  );
};
// }

export default Home;
