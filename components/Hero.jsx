import React from "react";

import heroImage from "@/public/assets/hero.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="section overflow-y-auto z-[1] relative px-24 pt-12 flex gap-16 justify-between items-center tablet:px-8 sMobile:flex sMobile:flex-col sMobile:gap-12 sMobile:py-[6rem] mobile:flex mobile:flex-col mobile:pt-[8rem] mobile:gap-0 mobile:pb-12">
      <div className="mb-8 mobile:pb-8">
        <h1 className="text-gray-300 font-bold text-[3rem] mb-4 tracking-wide leading-[5rem] tablet:text-2xl sMobile:text-[2.5rem] sMobile:leading-[3.2rem] extraSmallDevice:text-[1.5rem] extraSmallDevice:leading-[2rem] mobile:text-[3rem] mobile:leading-[3.5rem]">
          Welcome <br />
          to <span className="text-orange-600">Nextmarket</span>
        </h1>
        <p className="text-gray-300 mb-8 sMobile:text-[1.1rem] extraSmallDevice:text-[1.06rem] mobile:text-[1.1rem]">
          Nextmarket is online marketing platform for
          <span className="text-orange-600"> selling & buying</span> products
          <span className="text-orange-600 text-3xl rounded-full">.</span>
        </p>
        <Link
          href={"/"}
          className="bg-orange-600 py-3 px-4 rounded-md text-gray-100 text-[1.1rem] capitalize"
        >
          buy now
        </Link>
      </div>
      <div className="right">
        <div className="bg-orange-600 h-[350px] w-[350px] rounded-full absolute z-[-1] right-[17rem] tablet:right-[5rem] tablet:h-[300px] tablet:w-[300px] tablet:top-1rem sMobile:h-[300px] sMobile:w-[300px] sMobile:right-[2.5rem] extraSmallDevice:right-[1.5rem]"></div>
        <Image
          src={heroImage}
          alt={"Home Image"}
          width={800}
          height={800}
          className={
            "object-cover sMobile:w-[400px] sMobile:h-[400px] mobile:h-[450px] mobile:w-[450px]"
          }
        />
      </div>
    </section>
  );
};

export default Hero;
