import React from "react";

const CareerTitle = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-black w-full">
        <img
          src={require("../../public/laptopUser.jpg")}
          alt=""
          className="min-w-full md:h-[495px] h-[200px] relative opacity-50 object-cover"
        />
      </div>
      <h1 className="absolute font-poppins text-white md:text-[55px] sm:text-[35px] text-[30px]">
        CAREER
      </h1>
    </div>
  );
};

export default CareerTitle;
