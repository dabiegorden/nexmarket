"use client";

import Link from "next/link";
import React, { useState } from "react";

const FeaturedProducts = () => {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="mt-4 mb-4 bg-white rounded-md px-4 py-4">
      <form onSubmit={handleSubmit} className="flex gap-12 flex-col">
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="image">
            Image
          </label>
          <input
            type="file"
            className="product_input focus:ring focus:ring-blue-700 cursor-pointer block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-10"
            value={file}
            onChange={(event) => setFile(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="Product">
            Name
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="product_input focus:ring focus:ring-blue-700"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="Price">
            Price
          </label>
          <input
            type="number"
            placeholder="Price"
            className="product_input focus:ring focus:ring-blue-700"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="Description">
            Description
          </label>
          <input
            type="text"
            placeholder="Description"
            className="product_input focus:ring focus:ring-blue-700"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <input
            type="submit"
            value="Upload"
            className="bg-blue-700 px-4 py-2 rounded-md text-white cursor-pointer text-[1.05rem]"
          />
          <Link
            href={"/admin-dashboard/product/view"}
            className="bg-blue-700 px-4 py-2 rounded-md text-white cursor-pointer text-[1.05rem]"
          >
            View
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FeaturedProducts;
