import React from "react";

export default function ImageWithBorder({ imageSource, reverse }) {
  return (
    <div className="relative isolate flex-shrink-0 md:float-right lg:h-[280px] lg:w-[380px] xl:h-[360px] xl:w-[490px] 2xl:h-[462px] 2xl:w-[630px]">
      <img
        src={imageSource}
        alt="Services Images"
        className={`absolute top-0 ${
          reverse ? "left-0" : "right-0"
        } object-cover object-right lg:h-[250px] lg:w-[355px] xl:h-[320px] xl:w-[455px] 2xl:h-[406px] 2xl:w-[578px] `}
      />
      <div
        className={`absolute bottom-0 ${
          reverse ? "right-0" : "left-0"
        } -z-10 bg-accentColor lg:h-[185px] lg:w-[230px] xl:h-[240px] xl:w-[295px] 2xl:h-[310px] 2xl:w-[380px]`}
      ></div>
    </div>
  );
}
