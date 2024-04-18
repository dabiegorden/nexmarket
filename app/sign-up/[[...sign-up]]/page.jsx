import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <SignUp />
    </section>
  );
};

export default page;
