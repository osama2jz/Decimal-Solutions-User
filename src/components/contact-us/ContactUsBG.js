import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../../constants";

const ContactUsForm = () => {
  return (
    <div className="flex items-center justify-center bg-slate-100">
      <div className="bg-black w-full">
        <img
          src={require("./contactUsImage.jpg")}
          alt=""
          className="w-full md:h-[495px]  h-[250px] relative opacity-50 object-cover"
        />
      </div>
      <h1 className="absolute font-poppins text-white md:text-[55px] sm:text-[35px] text-[30px]">
        Contact Us
      </h1>
    </div>
  );
};

export default ContactUsForm;
