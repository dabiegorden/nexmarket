"use client";

import { SidebarLinks } from "@/app/constants";
// import Link from "next/link";
import React from "react";
import MenuLink from "./MenuLink/MenuLink";

const Sidebar = () => {
  return (
    <aside className="aside">
      <div>
        {SidebarLinks.map((item) => (
          <ul key={item.title}>
            <li key={item.title}>
              <span className="aside_span">{item.title}</span>
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
