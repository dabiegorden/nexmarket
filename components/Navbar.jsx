"use client";

import { NavbarLinks } from "@/app/constants";
import { SignedIn, UserButton } from "@clerk/nextjs";
import React, { useState } from "react";
import Link from "next/link";

import MobileNav from "./MobileNav";
import { MdSearch } from "react-icons/md";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <nav className="flex fixed w-full top-0 left-0 z-[999] justify-between items-center bg-white px-24 py-4 mobile:px-8 tablet:px-8">
      <Link href={"/"} className="capitalize text-[1.2rem]">
        Next<span className="text-blue-600">Market</span>
      </Link>
      <ul className="flex gap-16">
        {NavbarLinks.map((item) => {
          const isActive = pathname === item.link;
          return (
            <Link
              href={item.link}
              key={item.name}
              className={cn(
                "flex gap-12 mobile:hidden p-2 rounded-md tablet:px-1",
                {
                  "bg-blue-700 text-white": isActive,
                }
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </ul>

      <div className="flex gap-8 items-center">
        <Link
          href={"/admin-sign-up"}
          className="bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-gradient-to-tr hover:from-blue-700 hover:to-orange-700 hover:transition hover:duration-300 hover:ease-out mobile:hidden"
        >
          Admin Sign-up
        </Link>
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        {/* Mobile Navbar */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
