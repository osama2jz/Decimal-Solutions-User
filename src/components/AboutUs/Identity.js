import React from "react";

const Identity = () => {
  return (
    <div className="grid-col-1 md:grid-col-2">
      <div className="flex flex-row mt-24 flex-wrap md:gap-0 gap-12">
        <div className="flex flex-col justify-center items-center w-1/2 flex-1 basis-[300px]">
          <img
            src={require("../../public/whoWeAre.png")}
            alt=""
            className="w-[130px] h-[130px]"
          />
          <p className="font-poppins text-textColor font-semibold text-[25px] py-8">
            WHO WE ARE
          </p>
          <p className="font-poppins text-textColor text-[18px] text-center w-[70%]">
            We are a team of software development and testing enthusiasts,
            working tirelessly on software quality assurance. The last 2 years
            were the time we founded, developed, grew, and amazed. And we are
            still growing by working with some major clients from all over the
            world.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 flex-1 basis-[300px]">
          <img
            src={require("../../public/whoWeAre.png")}
            alt=""
            className="w-[130px] h-[130px]"
          />
          <p className="font-poppins text-textColor font-semibold text-[25px] py-8">
            WHAT WE DO
          </p>
          <p className="font-poppins text-textColor text-[18px] text-center w-[70%]">
            We help set up and maintain a digital presence of your brand or
            product. Our creative team makes sure that you have the most updated
            and innovative technology at your hands to boost your business. Your
            success is our success that’s why we prioritize customization,
            listen to your needs, and cover all the bases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Identity;
