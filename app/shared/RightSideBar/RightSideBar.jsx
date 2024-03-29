import React from "react";
import { MdDeliveryDining } from "react-icons/md";

const RightSideBar = () => {
  return (
    <main className="flex flex-col gap-4">
      <div className="bg-white px-4 py-4 rounded-md cursor-pointer ring-1 ring-gray-300 hover:bg-gray-100 Right">
        <p className="text-[14px] mb-2 text-gray-600 font-bold">Deliveries</p>
        <div className="flex items-center gap-1 mb-2">
          <MdDeliveryDining size={20} />
          <span className="text-[#222] font-bold">Total Deliveries</span>
        </div>
        <p className="mb-2 text-black text-[12px] font-bold">
          Delivers: 25,5867
        </p>
        <p className="text-[13px] text-gray-600">
          Track all the orders and deliveries
        </p>
      </div>

      <div className="bg-white px-4 py-4 rounded-md cursor-pointer ring-1 ring-gray-300 hover:bg-gray-100 Right">
        <p className="text-[14px] mb-2 text-gray-600 font-bold">Deliveries</p>
        <div className="flex items-center gap-1 mb-2">
          <MdDeliveryDining size={20} />
          <span className="text-[#222] font-bold">Total Deliveries</span>
        </div>
        <p className="mb-2 text-black text-[12px] font-bold">
          Delivers: 25,5867
        </p>
        <p className="text-[13px] text-gray-600">
          Track all the orders and deliveries
        </p>
      </div>
    </main>
  );
};

export default RightSideBar;
