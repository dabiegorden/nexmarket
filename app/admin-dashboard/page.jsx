import {
  Chart,
  OrdersCard,
  ProductCard,
  RightSideBar,
  Sales,
  SalesCard,
  Transactions,
} from "@/app/shared";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex gap-[20px] mt-[20px]">
      <div className="flex-[3] flex flex-col gap-[18px]">
        <div className="flex justify-between gap-[18px]">
          <ProductCard />
          <OrdersCard />
          <SalesCard />
        </div>

        <Transactions />
        <Chart />
      </div>

      <div className="flex-[1]">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Dashboard;
