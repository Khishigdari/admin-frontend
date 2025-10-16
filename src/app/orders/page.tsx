import { AdminLayout } from "@/_components/layout/AdminLayout";
import React from "react";

const OrdersPage = () => {
  return (
    <div className="bg-gray-100 max-w-full h-screen inter">
      <AdminLayout>
        <div className="flex gap-6">
          {/* <div className="card w-[1170px] h-[582px] bg-white flex justify-center p-5">
            <div className="border border-dashed rounded-[20px] border-[#EF4444] w-[270px] h-[240px] py-2 px-4 flex flex-col gap-6 justify-center items-center">
              <AddDishComp />
              <p className="text-[#18181B] text-[14px] leading-5 font-[500]">
                Add new Dish to Salads
              </p>
            </div>
          </div> */}
        </div>
      </AdminLayout>
    </div>
  );
};

export default OrdersPage;
