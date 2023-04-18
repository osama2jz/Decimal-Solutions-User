import React from "react";
import blogImage from "../../assets/images/Kaiya.jpg";

const Card = (props) => {
  const backgroundImage2 = {
    backgroundImage: `url("${[props.image]}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="group relative flex  w-full min-w-[270px] max-w-[500px]    justify-center ">
      <div className=" absolute top-0 left-0 bottom-0 right-0 z-10 my-5 flex   flex-col items-center justify-center space-y-5 rounded-[15px] bg-accentColor px-20 text-[22px] text-white opacity-0 transition-all  duration-300  ease-in-out group-hover:opacity-100">
        <p>Visit App Link:</p>
        <a href="#" className="break-all">
          https://play.google.com/store/apps/ details?id=com.dps.ak_flower_shop
        </a>
      </div>
      <div className="my-5 w-full items-center justify-center text-black">
        <div
          className=" relative aspect-[1.1] w-full rounded-[15px]"
          style={backgroundImage2}
        ></div>
      </div>
    </div>
  );
};

export default Card;
