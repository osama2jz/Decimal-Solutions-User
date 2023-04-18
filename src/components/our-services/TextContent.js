import React from "react";

export default function TextContent({ children, reverse, heading }) {
  return (
    <div className={reverse && "lg:text-right"}>
      <h1
        className={`relative font-semibold uppercase text-textColor before:absolute before:top-0 ${
          reverse ? "before:lg:right-0" : "before:left-0"
        }  py-[14px] text-[18px] before:block before:h-[5px] before:w-[100px] before:bg-accentColor before:content-[''] sm:py-[16px] sm:text-[22px] md:py-[20px] md:text-[25px] before:md:h-[6px] before:md:w-[120px] lg:py-[25px] lg:text-[30px] before:lg:h-[7px] before:lg:w-[140px] xl:py-[30px] xl:text-[35px] 2xl:py-[50px] 2xl:text-[40px] before:2xl:h-[7px] before:2xl:w-[158px]`}
      >
        {heading}
      </h1>
      <p className="sm:text-[16px ] text-[14px] leading-loose text-textColor md:text-[18px] lg:text-[20px] xl:text-[22px] xl:leading-[45px] 2xl:text-[25px] 2xl:leading-[55px] ">
        {children}
      </p>
    </div>
  );
}
