import React from "react";

const AboutUs = () => {
  return (
    <div className="relative h-[200px] w-full sm:h-[250px] md:h-[350px] lg:h-[400px] 2xl:h-[500px]">
      <img
        src={require("../../public/softwareEngineer.jpg")}
        alt="Banner Background"
        className="h-[200px] w-full object-cover object-[30%] sm:h-[250px] md:h-[350px] lg:h-[400px] 2xl:h-[500px] "
      />
      <h1 className="absolute top-0 left-0 grid h-full w-full place-items-center  bg-black/40 text-[25px] font-semibold uppercase text-white sm:text-[30px] md:text-[35px] lg:text-[40px]  xl:text-[45px] 2xl:text-[55px] ">
        ABOUT US
      </h1>
    </div>
    // <div className="flex items-center justify-center">
    //   <div className="bg-black w-full">
    //     <img
    //       src={require("../../public/softwareEngineer.jpg")}
    //       alt=""
    //       className="min-w-full md:h-[495px] h-[200px] relative opacity-50 object-cover"
    //     />
    //   </div>
    //   <h1 className="absolute font-poppins text-white md:text-[55px] sm:text-[35px] text-[30px]">
    //     ABOUT US
    //   </h1>
    // </div>
  );
};

export default AboutUs;
