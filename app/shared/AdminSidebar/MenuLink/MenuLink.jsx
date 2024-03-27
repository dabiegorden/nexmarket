"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`menuLinks ${pathname === item.path && "active"}`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
