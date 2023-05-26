import React from "react";

const Mission = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-poppins text-[35px] font-semibold mt-16">
        OUR MISSION
      </h1>
      <q className="font-poppins text-[20px] text-textColor w-[80%] flex-wrap text-center mt-8">
        Our mission is to provide all sorts of IT solutions and services to
        clients under one umbrella. We aim to provide quality products and
        perform strict testing so clients can have a product that is ready to
        use without further updates.
      </q>
      <p className="font-poppins text-textColor text-[21px] mt-3">
        Tehseen Riaz Abbasi,{" "}
        <span className="font-poppins text-accentColor text-[21px]">CEO</span>
      </p>
    </div>
  );
};

export default Mission;
