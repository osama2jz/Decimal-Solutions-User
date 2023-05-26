import React from "react";
import osama from "../../public/osama.jpg";
import osama2 from "../../public/osama2.jpg";
import sheeza from "../../public/person.jpg";

const TeamCards = (props) => {
  const backgroundImage2 = {};

  const profileCards = [
    {
      name: "Muhammad Osama",
      jobTitle: "Software Developer",
      image: osama,
    },
    {
      name: "Abdullah Saad",
      jobTitle: "Software Developer",
      image: osama2,
    },
    {
      name: "Sheeza Khan",
      jobTitle: "Graphic Designer",
      image: sheeza,
    },
    {
      name: "Muhammad Osama",
      jobTitle: "Software Developer",
      image: osama,
    },
    {
      name: "Abdullah Saad",
      jobTitle: "Software Developer",
      image: osama2,
    },
    {
      name: "Sheeza Khan",
      jobTitle: "Graphic Designer",
      image: sheeza,
    },
  ];
  return (
    <div className="flex justify-center px-6 gap-10 items-center flex-wrap mt-16">
      
      {profileCards.map((item) => (
        <div className="flex items-center justify-center text-black my-5">
          <div className="flex flex-col gap-4">
            <img
              alt="user"
              src={item.image}
              className="xs:w-[350px] aspect-square object-cover rounded-2xl"
            />
            <div className="">
              <h1 className="font-bold text-xl">{item.name}</h1>
              <p className="font-poppins">{item.jobTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCards;
