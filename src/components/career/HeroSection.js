import React from "react";

const HeroSection = () => {
  return (
    <div className="flex md:mt-24 mt-12 md:px-16 px-6 sm:gap-2 gap-1">
      <div className="flex flex-col lg:w-1/2 md:full">
        <span className="font-poppins text-accentColor md:text-[22px] sm:text-[16px] text-[12px] font-normal">
          &lt; JOB POSITIONS &gt;
        </span>
        <h1 className="font-poppins text-textColor md:text-[36px] sm:text-[26px] text-[22px] font-semibold">
          Start Work with Us!
        </h1>
        <p className="font-poppins text-textColor md:text-[19px] text-[13px] font-normal md:leading-[44px] leading-[24px] md:mt-6 mt-5 lg:w-[90%] md:w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <h2 className="font-poppins text-textColor font-semibold md:text-[22px] sm:text-[18px] text-[16px] md:mt-7 sm:mt-5 mt-3">
          Why Working with us?
        </h2>
        <p className="font-poppins text-textColor md:text-[19px] text-[13px] font-normal md:leading-[44px] leading-[24px] md:mt-7 mt-5 lg:w-[90%] md:w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap.
        </p>
      </div>
      <div className="hidden lg:flex lg:w-1/2 lg:gap-16 pb-4">
        <div className="flex flex-col">
          <div className="mt-28">
            <img
              src={require("../../public/funnyGroup.jpg")}
              alt=""
              className="md:w-[350px] md:h-[320px] sm:w-[350px] sm:h-[250px] object-cover"
            />
          </div>
          <div className="flex justify-end items-end md:mt-[64px] sm:mt-[32px] mt-[16px] h-full">
            <img
              src={require("../../public/handWriting.jpg")}
              alt=""
              className="w-[270px] h-[240px] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <img
              src={require("../../public/amazedGroup.jpg")}
              alt=""
              className="w-[250px] h-[240px] object-cover"
            />
          </div>
          <div className="mt-[64px]">
            <img
              src={require("../../public/girlLaptop.jpg")}
              alt=""
              className="w-[250px] h-[470px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
