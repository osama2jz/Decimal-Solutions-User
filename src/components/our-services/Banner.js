import React from "react";

export default function Banner({ backgroundImage, children }) {
  return (
    <div className="relative h-[200px] w-full sm:h-[250px] md:h-[350px] lg:h-[400px] 2xl:h-[500px]">
      <img
        src={backgroundImage}
        alt="Banner Background"
        className="h-[200px] w-full object-cover object-[30%] sm:h-[250px] md:h-[350px] lg:h-[400px] 2xl:h-[500px] "
      />
      <h1 className="absolute top-0 left-0 grid h-full w-full place-items-center  bg-black/40 text-[25px] font-semibold uppercase text-white sm:text-[30px] md:text-[35px] lg:text-[40px]  xl:text-[45px] 2xl:text-[55px] ">
        {children}
      </h1>
    </div>
  );
}
