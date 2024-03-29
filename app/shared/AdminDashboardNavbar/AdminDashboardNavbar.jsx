"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const AdminDashboardNavbar = () => {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <div className="flex justify-between items-center pr-4 bg-white py-[1.5rem] px-4 rounded-md">
      <div className="title">{pathname.split("/").pop()}</div>
      <div className="flex items-center gap-8">
        <form className="flex items-center ring-1 ring-gray-600 pl-3 pr-3 rounded-md py-[0.5rem] focus:ring focus:ring-blue-700">
          <input
            type="text"
            placeholder="Search items..."
            className="admin_input"
          />
          <MdSearch className="admin_search_icon" />
        </form>
        <div className="flex gap-4">
          <MdNotifications size={22} cursor={"pointer"} />
          <MdOutlineChat size={22} cursor={"pointer"} />
          <MdPublic size={22} cursor={"pointer"} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardNavbar;
