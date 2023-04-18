import React from "react";
import cardImage from "../../public/person.jpg";

const TeamCards = (props) => {
  const backgroundImage2 = {
    backgroundImage: `url("${cardImage}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const profileCards = [
    {
      name: "abcs",
      jobTitle: "asdas dasdas ds",
    },
    {
      name: "abcs",
      jobTitle: "asdas dasdas ds",
    },
    {
      name: "abcs",
      jobTitle: "asdas dasdas ds",
    },
  ];
  return (
    <div className="flex justify-center px-6 gap-3 items-center flex-wrap mt-16">
      {profileCards.map((item) => (
        <div className="flex items-center justify-center text-black my-5">
          <div
            className="xs:w-[440px] xs:h-[400px]  md:w-[501px] md:h-[460px] relative"
            style={backgroundImage2}
          >
            <div className="bg-[#A4238C] w-[70%] h-[25%] absolute bottom-0 left-0 flex flex-col p-5 text-white opacity-80">
              <h1 className="text-xl font-poppins font-bold flex justify-start h-full items-center before:content-[''] before:block before:absolute relative before:h-[5px] before:w-[50px] before:bg-white before:left-0 before:top-[calc(50%-3px)] pl-[60px]">
                {item.name}
              </h1>
              <p className="font-poppins">{item.jobTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCards;
