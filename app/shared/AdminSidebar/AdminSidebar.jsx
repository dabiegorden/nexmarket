"use client";

import { SidebarLinks } from "@/app/constants";
// import Link from "next/link";
import React, { useState } from "react";
import MenuLink from "./MenuLink/MenuLink";
import { MdClose, MdMenu } from "react-icons/md";

const Sidebar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <aside className="aside">
      <div className="">
        {SidebarLinks.map((item) => (
          <ul key={item.title}>
            <li key={item.title}>
              <span className="flex justify-between items-center mb-4 capitalize text-white">
                {item.title}{" "}
                {menu ? (
                  <MdClose
                    onClick={() => setMenu(false)}
                    className="text-[24px] cursor-pointer"
                  />
                ) : (
                  <MdMenu
                    onClick={() => setMenu(true)}
                    className="text-[24px] cursor-pointer"
                  />
                )}
              </span>
              {item.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          </ul>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
