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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has jwfghi been the industry's standard dummy
            text ever since the 1500s, when an unknown printerca took a galley
            of type and scrambled it to make a tysape specimen book. It has
            survived not only a five centuries, but also the leap into
            electronic typesetting,
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has jwfghi been the industry's standard dummy
            text ever since the 1500s, when an unknown printerca took a galley
            of type and scrambled it to make a tysape specimen book. It has
            survived not only a five centuries, but also the leap into
            electronic typesetting,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Identity;
