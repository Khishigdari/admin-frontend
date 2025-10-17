// import { AdminLayout } from "@/_components/layout/AdminLayout";

// import {
//   AddCategoryComp,
//   AddDishComp,
//   AddFoodCardsComp,
//   CategorizedFoods,
// } from "@/_components/products";
// import { Button } from "@/_components/ui/button";

// const ProductsPage = () => {
//   return (
//     <div className="bg-gray-100 max-w-full h-screen inter pr-10">
//       <AdminLayout>
//         <AddCategoryComp />
//         <div className="">
//           <div className="card bg-white flex flex-row gap-2 justify-center p-5">
//             <Button
//               variant="outline"
//               className="border border-dashed rounded-[20px] border-[#EF4444] w-67.5 h-[240px] py-2 px-4 flex flex-col gap-6 justify-center items-center"
//             >
//               {/* <AddDishComp categoryId={categoryId} refetchFoods={refetchFoods}/> */}
//               {categories.map((category)=>{return(<CategorizedFoods key={category._id} refetchFoods={()=>{getFoods()} foods={foods.filter((food)=>food.categoryId._id == category._id)} category={category}/>)})}

//               <p className="text-[#18181B] text-[14px] leading-5 font-[500]">
//                 Add new Dish to Salads
//               </p>
//             </Button>
//             <AddFoodCardsComp />
//           </div>
//         </div>
//       </AdminLayout>
//     </div>
//   );
// };

// export default ProductsPage;
