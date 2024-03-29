import React from "react";
import { MdDeliveryDining, MdShop } from "react-icons/md";

const OrdersCard = () => {
  return (
    <div className="bg-white px-4 py-4 rounded-md cursor-pointer ring-1 ring-gray-300 hover:bg-gray-100 Orders">
      <div className="flex items-center gap-1 mb-2">
        <MdDeliveryDining size={20} />
        <span className="text-[#222] font-bold">Total Orders</span>
      </div>
      <p className="mb-2 text-black text-[12px] font-bold">GHS: 18,5867</p>
      <p className="text-[13px]">
        <span className="text-indigo-500">15%</span> more than the previous week
      </p>
    </div>
  );
};

export default OrdersCard;
