import Link from "next/link";
import React from "react";
import { MdArrowForward } from "react-icons/md";

const UI = () => {
  return (
    <main className="mt-8">
      <h1 className="mb-[1.5rem] font-bold">Control your UI Design</h1>
      <div className="flex gap-8 mb-24">
        <Link
          href={"/admin-dashboard/ui/hero"}
          className="bg-white px-4 py-4 rounded-md ui"
        >
          <h3 className="font-bold mb-4">Home Page</h3>
          <p className="mb-4 text-[0.9rem]">Click to add homepage design</p>
          <MdArrowForward className="bg-blue-700 block rounded-full text-white cursor-pointer arrow" />
        </Link>
        <Link
          href={"/admin-dashboard/ui/banner"}
          className="bg-white px-4 py-4 rounded-md ui"
        >
          <h3 className="font-bold mb-4">Banner Page</h3>
          <p className="mb-4 text-[0.9rem]">Click to add Banner design</p>
          <MdArrowForward className="bg-blue-700 block rounded-full text-white cursor-pointer arrow" />
        </Link>
        <Link
          href={"/admin-dashboard/ui/new-arrivals"}
          className="bg-white px-4 py-4 rounded-md ui"
        >
          <h3 className="font-bold mb-4">New Arrivals Page</h3>
          <p className="mb-4 text-[0.9rem]">Click to add New Arrivals design</p>
          <MdArrowForward className="bg-blue-700 block rounded-full text-white cursor-pointer arrow" />
        </Link>

        <Link
          href={"/admin-dashboard/ui/featured-products"}
          className="bg-white px-4 py-4 rounded-md ui"
        >
          <h3 className="font-bold mb-4">Featured Products Page</h3>
          <p className="mb-4 text-[0.9rem]">
            Click to add Featured Products design
          </p>
          <MdArrowForward className="bg-blue-700 block rounded-full text-white cursor-pointer arrow" />
        </Link>
      </div>

      <div className="flex gap-12">
        <Link
          href={"/admin-dashboard/ui/product-categories"}
          className="bg-white px-4 py-4 rounded-md ui"
        >
          <h3 className="font-bold mb-4">Product Categories Page</h3>
          <p className="mb-4 text-[0.9rem]">
            Click to add Product Categories design
          </p>
          <MdArrowForward className="bg-blue-700 block rounded-full text-white cursor-pointer arrow" />
        </Link>
        <Link
          href={"/admin-dashboard/ui/product-listing"}
          className="bg-white px-4 py-4 rounded-md ui"
        >
          <h3 className="font-bold mb-4">Product Listing Page</h3>
          <p className="mb-4 text-[0.9rem]">
            Click to add Product Listing design
          </p>
          <MdArrowForward className="bg-blue-700 block rounded-full text-white cursor-pointer arrow" />
        </Link>
        <Link
          href={"/admin-dashboard/ui/special-offers"}
          className="bg-white px-4 py-4 rounded-md ui"
        >
          <h3 className="font-bold mb-4">Special Offers Page</h3>
          <p className="mb-4 text-[0.9rem]">
            Click to add Special Offers design
          </p>
          <MdArrowForward className="bg-blue-700 block rounded-full text-white cursor-pointer arrow" />
        </Link>
      </div>
    </main>
  );
};

export default UI;
