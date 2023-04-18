import React from "react";

const jobs = [
  {
    title: "Data Scientist",
    type: "Full Time, Part Time",
    seats: 4,
  },
  {
    title: "Data Scientist",
    type: "Full Time, Part Time",
    seats: 4,
  },
  {
    title: "Data Scientist",
    type: "Full Time, Part Time",
    seats: 4,
  },
  {
    title: "Data Scientist",
    type: "Full Time, Part Time",
    seats: 4,
  },
  {
    title: "Data Scientist",
    type: "Full Time, Part Time",
    seats: 4,
  },
  {
    title: "Data Scientist",
    type: "Full Time, Part Time",
    seats: 4,
  },
];

const JobPosting = ({ title, type, seats }) => {
  return (
    <div className="w-full aspect-[1.2] flex flex-1 flex-col items-center justify-center gap-[10px] rounded-[24px] border-2 border-boxColor 2xl:py-[64px]">
      <h1 className="font-semibold md:2xl:text-[37px] md:mt-0 sm:py-3">
        {title}
      </h1>
      <p className="2xl:text-[24px]">Type: {type}</p>
      <p className="2xl:text-[24px]">Seats: {seats}</p>
      <button className="bg-accentColor rounded-full text-white font-poppins font-semibold px-[52px] py-[10px]">
        Button
      </button>
    </div>
  );
};

const Jobs = ({ title, type, seats }) => {
  return (
    <div className="grid md:w-full mt-12 grid-cols-1 gap-x-[30px] gap-y-[36px] md:grid-cols-2 md:px-12 px-16 lg:grid-cols-3 2xl:h-[395px] 2xl:px-[130px]">
      {jobs.map((job) => (
        <JobPosting title={job.title} type={job.type} seats={job.seats} />
      ))}
    </div>
  );
};

export default Jobs;
