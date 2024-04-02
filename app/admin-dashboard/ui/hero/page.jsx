"use client";

import React, { useState } from "react";

const Hero = () => {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [button, setButton] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="mt-[1.7rem]">
      <h1 className="mb-8 font-bold">Design your home page</h1>
      <form onSubmit={handleSubmit} className="flex gap-12 flex-col">
        <div className="flex flex-col">
          <label className="mb-[0.8rem] font-bold" htmlFor="image">
            Image
          </label>
          <input
            type="file"
            className="product_input focus:ring focus:ring-blue-700 cursor-pointer block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-10 bg-white"
            value={file}
            onChange={(event) => setFile(event.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-[0.8rem] font-bold">
            Title
          </label>
          <input
            type="text"
            placeholder="Title"
            className="px-4 py-[0.8rem] rounded-md border-none outline-none focus:ring focus:ring-blue-600"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="paragraph" className="mb-[0.8rem] font-bold">
            Paragraph
          </label>
          <input
            type="text"
            placeholder="Paragraph"
            className="px-4 py-[0.8rem] rounded-md border-none outline-none focus:ring focus:ring-blue-600"
            value={paragraph}
            onChange={(event) => setParagraph(event.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="button" className="mb-[0.8rem] font-bold">
            Button
          </label>
          <input
            type="text"
            placeholder="Title"
            className="px-4 py-[0.8rem] rounded-md border-none outline-none focus:ring focus:ring-blue-600"
            value={button}
            onChange={(event) => setButton(event.target.value)}
          />
        </div>
      </form>
    </main>
  );
};

export default Hero;
