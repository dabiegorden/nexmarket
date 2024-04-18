"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Link from "next/link";

const AdminSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <section className="admin">
      <Navbar />
      <div className="admin_register bg-white px-4 py-4 rounded-md">
        <h2 className="mb-8 font-bold text-black">Admin Sign In</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2.5 items-start justify-start"
        >
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email"
            className="border border-blue-500 outline-none py-[0.75rem] px-4 mb-2.5 rounded-md focus:ring focus:ring-blue-600 w-full"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
            className="border border-blue-500 outline-none py-[0.75rem] px-4 mb-2.5 rounded-md focus:ring focus:ring-blue-600 w-full"
          />

          <div className="flex gap-3 items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-[0.8rem] px-4 rounded-md"
            >
              Sign In
            </button>
            <p>
              Don't have an account?
              <Link href={"/admin-sign-up"} className="text-blue-500">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default AdminSignIn;
