import React from "react";
import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <SignIn />
    </section>
  );
};

export default page;
