import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../../constants";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios.get(backendUrl + "/api/v1/web/contactUs").then((res) => {
      setData(res.data.data[0]);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <div class="grid h-auto grid-cols-1  grid-rows-2 gap-4 bg-[#F4F4F4] xl:h-[1022px] xl:grid-cols-12  xl:grid-rows-1">
        <div className="  relative flex items-center p-10 px-2.5 md:px-5 xl:col-span-5 xl:col-start-1">
          <div className=" absolute right-[-20px] top-auto bottom-auto my-auto hidden h-[799px]   w-[49.01px] bg-accentColor xl:block"></div>
          <div>
            <div className="mt-[10px] flex w-full flex-col pl-10">
              <span className=" font-poppins text-[12px] font-normal text-accentColor sm:text-[16px] md:text-[26px]">
                &lt;CONTACT US&gt;
              </span>
              <h1 className="font-poppins text-textColor text-[22px] font-semibold sm:text-[26px] md:text-[40px]">
                Get In Touch with Us
              </h1>
            </div>
            <div className=" m-10 space-y-5 border-l-4 border-accentColor  pl-5">
              <span className="font-poppins text-[12px] font-normal text-accentColor sm:text-[16px] md:text-[22px]">
                Contact Number
              </span>
              <div>
                <span className="font-poppins text-[12px] font-normal sm:text-[16px] md:text-[22px]">
                  {data.primaryContact}
                </span>
              </div>
            </div>
            <div className=" m-10 space-y-5 border-l-4 border-accentColor pl-5">
              <span className="font-poppins text-[12px] font-normal text-accentColor sm:text-[16px] md:text-[22px]">
                Email
              </span>
              <div>
                <span className="font-poppins  text-[12px] font-normal sm:text-[16px] md:text-[22px]">
                  {data?.primaryEmail}
                </span>
              </div>
            </div>
            <div className=" m-10 space-y-5 border-l-4 border-accentColor pl-5">
              <span className="font-poppins text-[12px] font-normal text-accentColor sm:text-[16px] md:text-[22px]">
                Office Address
              </span>
              <div>
                <span className="font-poppins  text-[12px] font-normal sm:text-[16px] md:text-[22px]">
                  {data?.primaryAddress}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mb-[33px] flex items-center bg-[#ffffff] px-2.5  md:px-5 lg:p-10   xl:col-span-7 xl:col-start-6">
          <div className="flex w-full flex-col px-2.5 md:px-5 lg:p-10">
            <form className="flex flex-col gap-6">
              <div>
                <div className="flex w-full  flex-col">
                  <span className="font-poppins text-[12px] font-normal text-accentColor sm:text-[16px] md:text-[26px]">
                    &lt;GET PURE ESTIMATE&gt;
                  </span>
                  <h1 className="font-poppins text-textColor text-[22px] font-semibold sm:text-[26px] md:text-[40px]">
                    Fill Up The Form
                  </h1>
                </div>
              </div>
              <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <div class="relative">
                    <input
                      placeholder="Full Name"
                      type="text"
                      class="h:45 font-poppins mt-2 block w-full rounded-[5px] border border-gray-500 bg-white py-2  pl-8 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring-0 focus:ring-blue-300 focus:ring-opacity-40 md:h-[65] md:px-4 lg:h-[85px] xl:mt-2 xl:px-4 xl:py-2 xl:pl-8"
                    />
                  </div>
                </div>

                <div>
                  <div class="relative">
                    <input
                      placeholder="Enter Email Address"
                      type="email"
                      class="h:45 font-poppins mt-2  block w-full rounded-[5px] border border-gray-500 bg-white px-4  py-2 pl-8 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring-0 focus:ring-blue-300 focus:ring-opacity-40 md:h-[65] lg:h-[85px] xl:mt-2 xl:px-4 xl:py-2 xl:pl-8"
                    />
                  </div>
                </div>
              </div>

              <div class="relative">
                <input
                  placeholder="Interested In"
                  type="text"
                  class="h:45 font-poppins block  w-full rounded-[5px] border border-gray-500 bg-white py-2 pl-8  text-gray-700 focus:border-gray-400 focus:outline-none focus:ring-0 focus:ring-blue-300 focus:ring-opacity-40 md:mt-2 md:h-[65] md:px-4 lg:h-[85px] xl:mt-2 xl:px-4 xl:py-2 xl:pl-8 "
                />
              </div>
              <div class="relative">
                <textarea
                  placeholder="Write Your Message"
                  class="h:75 font-poppins block  w-full resize-none rounded-[5px] border  border-gray-500 bg-white    pt-8  pl-8 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring-0 focus:ring-blue-300 focus:ring-opacity-40 md:mt-2 md:h-[95] lg:h-[125px] xl:mt-2 xl:px-8 xl:py-8 xl:pl-8"
                ></textarea>
              </div>
              <div className="relative ">
                <button className="static top-10 right-0 float-right  h-[70px] w-[250px] rounded-[10px] bg-accentColor  text-[15px] text-white  hover:brightness-90 sm:text-[20px] md:h-[77px] md:w-[303px] md:text-[25px] xl:absolute">
                  Get Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="h-[97px] bg-white "></div>
    </div>
  );
};

export default ContactUsForm;
