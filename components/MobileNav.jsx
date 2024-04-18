"use client";

import React from "react";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdMenu } from "react-icons/md";
import { NavbarLinks } from "@/app/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <main className="hidden mobile:flex">
      <Sheet>
        <SheetTrigger asChild>
          <MdMenu size={24} className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="text-center bg-[#222] border-none text-white">
          <Link href={"/"} className="capitalize text-[1.5rem] font-bold">
            Next<span className="text-blue-600">Market</span>
          </Link>

          <div className="className">
            <SheetClose asChild>
              <section className="sections">
                {NavbarLinks.map((item) => {
                  const isActive = pathname === item.link;
                  return (
                    <SheetClose
                      asChild
                      key={item.link}
                      className="flex flex-col gap-[10rem]"
                    >
                      <Link
                        href={item.link}
                        key={item.name}
                        className={cn(
                          "flex gap-24  extraSmallDevice:mb-[0.6rem] mb-16 mt-8 items-center p-4 rounded-lg",
                          { "bg-blue-600": isActive }
                        )}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  );
                })}
                <Link
                  href={"/admin-sign-up"}
                  className="bg-orange-700 text-white py-3 px-4 rounded-md hover:bg-gradient-to-tr hover:from-blue-700 hover:to-orange-700 hover:transition hover:duration-300 hover:ease-out"
                >
                  Admin Sign-up
                </Link>
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </main>
  );
};

export default MobileNav;
