import React from "react";
import pic from "../components/blogs/1111.avif";
import Card from "../components/blogs/Card";
import Pagination from "../components/blogs/Pagination";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import blogImage from "../assets/images/BlogHero.png";

import {
  ChevronLeft,
  ChevronRight,
  BrandFacebook,
  BrandTwitter,
  BrandInstagram,
} from "tabler-icons-react";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment/moment";

const SpecificBlog = () => {
  const navigate=useNavigate()

  const {data}=useLocation().state
  console.log("State",data)
  const [blogs, setBlogs] = React.useState();
  const backgroundImage = {
    backgroundImage: `url("${pic}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div
        className="text-white bg-slate-700 my-10 w-auto h-[498px]"
        style={backgroundImage}
      >
        <h1 className="text-5xl font-bold flex justify-center w-full h-full items-center">
          BLOG DETAIL
        </h1>
      </div>
      <div className=" lg:px-32 sm:px-24 xs:px-5">
        <div className="lg:flex justify-between  border-b-4">
          <div className="lg:flex items-center mb-4">
            <h1 className="pr-4 text-[40px] font-semibold">{data?.blogTitle}</h1>
            <h1 className="text-[25px] text-[#C7C7C7] ">{moment(data?.createdAt).format("DD MMMM YYYY")}</h1>
          </div>
          <div className="flex items-center">
            <div className="px-2">
              <AiFillTwitterCircle size={38} color="#C7C7C7" />
            </div>
            <div className="px-2">
              <AiOutlineInstagram size={38} color="#C7C7C7" />
            </div>

            <div className="px-2">
              <BsFacebook size={32} color="#C7C7C7" />
            </div>
          </div>
        </div>
        <p>{data?.description}</p>

        <div>
          <h1 className="text-3xl mt-6 mb-4 text-justify underline-offset-8 font-semibold">{data?.blogDescription}</h1>
          <div className="xl:flex justify-center ">
            <h1 className="mt-6 text-[25px] text-justify leading-loose pr-5 ">
              {data?.blogData}
            </h1>
            <img src={data?.blogImage} alt="" className="mt-6  w-[657px] xl:float-right" />
          </div>
         </div>
        
      </div>
      <div className=" px-32 flex items-center cursor-pointer" onClick={()=>navigate(-1)}>
     
        <ChevronLeft size={36} color="#A4238C" />

        <h1 className="text-[#A4238C] text-[32px] p-10">GO BACK</h1>
      </div>
    </div>
  );
};

export default SpecificBlog;
