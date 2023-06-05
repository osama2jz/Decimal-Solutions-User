import React from "react";
import { useNavigate } from "react-router-dom";
const Card = (props) => {
  const backgroundImage2 = {
    backgroundImage: `url("${props.image}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const navigation = useNavigate();
  const id = 1231241251;
  return (
    <div
      className="flex justify-center hover:cursor-pointer"
      onClick={() => {
        navigation("/blogs/" + id,{
          state:{
            data:props.data
          }
        });
      }}
    >
      <div className="xs:w-[440px] md:w-[401px] text-black my-5 items-center justify-center ">
        <div
          className="xs:w-[440px] md:w-[401px] aspect-square relative"
          style={backgroundImage2}
        >
          {/* <div className="bg-[#A4238C]  absolute bottom-0 flex justify-center items-center p-5 text-white opacity-80">
            <div className="border-t-4">
              <h1 className="text-6xl font-bold flex justify-start h-full items-end  ">
                {props?.date?.split(" ")[0]}
              </h1>
            </div>
            <div className="px-2">
              <h1 className="text-2xl flex justify-start h-full items-end">
                {props?.date?.split(" ")[1]}
              </h1>
              <h1 className="text-2xl flex justify-start h-full items-end">
                {props?.date?.split(" ")[2]}
              </h1>
            </div>
          </div> */}
          <div className="absolute bottom-0 flex justify-center items-center p-5 text-white ">
            <div className="border-t-4">
              <h1 className="text-6xl font-bold flex justify-start h-full items-end  ">
                {props?.date?.split(" ")[0]}
              </h1>
            </div>
            <div className="px-2">
              <h1 className="text-2xl flex justify-start h-full items-end">
                {props?.date?.split(" ")[1]}
              </h1>
              <h1 className="text-2xl flex justify-start h-full items-end">
                {props?.date?.split(" ")[2]}
              </h1>
            </div>
          </div>
        </div>
        <h2 className="text-[25px] font-bold mt-8 xs:w-[440px]   md:w-[501px] ">
          {props.title}
        </h2>
        {/* <h1 className="text-[20px] my-4  text-justify ">{props.description}</h1> */}
      </div>
    </div>
  );
};

export default Card;
