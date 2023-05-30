import React from "react";
import HiringProcess from "../components/career/HiringProcess";
import { useLocation, useNavigate } from "react-router-dom";

export const Viewjob = () => {
  const navigate = useNavigate();
  const { jobData } = useLocation().state;
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="bg-black w-full">
          <img
            src={require("../public/laptopUser.jpg")}
            alt=""
            className="min-w-full md:h-[495px] h-[200px] relative opacity-50 object-cover"
          />
        </div>
        <h1 className="absolute font-poppins text-white md:text-[55px] sm:text-[35px] text-[30px]">
          {jobData.title}
        </h1>
      </div>
      <HiringProcess />
      <div className="view-Jobs-content">
        <div class="portfolio-heading">
          <div class="portfolio-title">
            <span class="por-title">
              {" "}
              &lt;&nbsp;USQUARE SOLUTIONS&nbsp;&gt;{" "}
            </span>
            <h2 className="font-bold text-3xl">{jobData?.title}</h2>
          </div>
        </div>
        <div className="job-description">
          <div>
            <div>
              <text className="font-bold text-lg">Minimum Qualification</text>
              {" : "}
              <text className="text-gray-500 text-lg">
                {jobData?.minimumQualifications}
              </text>
            </div>
            <div>
              <text className="font-bold text-lg">Experience Level</text>
              {" : "}
              <text className="text-gray-500 text-lg">
                {jobData?.experienceLevel}
              </text>
            </div>
            <div>
              <text className="font-bold text-lg">Minimum Experience</text>
              {" : "}
              <text className="text-gray-500 text-lg">
                {jobData?.minimumExperience}
              </text>
            </div>
            <div>
              <text className="font-bold text-lg">Location</text>
              {" : "}
              <text className="text-gray-500 text-lg">{jobData?.location}</text>
            </div>
            <div>
              <text className="font-bold text-lg">Job Type</text>
              {" : "}
              <text className="text-gray-500 text-lg">{jobData?.type}</text>
            </div>
            <div>
              <text className="font-bold text-lg">Application Deadline</text>
              {" : "}
              <text className="text-gray-500 text-lg">
                {jobData?.jobApplictionDeadline}
              </text>
            </div>
            <div>
              <text className="font-bold text-lg">Salary Range</text>
              {" : "}
              <text className="text-gray-500 text-lg">
                {jobData?.minimumJobSalary} : {jobData?.maximumJobSalary}
              </text>
            </div>
          </div>
          <button
            className="bg-accentColor rounded-full h-[50px] text-white font-poppins font-semibold px-[52px] py-[10px] hover:opacity-90"
            onClick={() => navigate("/apply-job/hello", { state: { jobData } })}
          >
            Apply Now
          </button>
        </div>
        <h1 className="font-bold text-2xl mt-10">Job Description</h1>
        <p className="mt-2">{jobData?.description}</p>
        <br />
        <h1 className="font-bold text-1xl">Job Requirements</h1>
        <p className="mt-2">{jobData?.jobRequirements}</p>
        <h1 className="font-bold text-1xl">Responsibilities</h1>
        <p className="mt-2">{jobData?.jobResponsibilities}</p>
      </div>
    </div>
  );
};
