import React from "react";
import HiringProcess from "../components/career/HiringProcess";
import { useNavigate } from "react-router-dom";

export const Viewjob = () => {
  const navigate = useNavigate();
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
          Job Title
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
            <h2 className="font-bold text-3xl">UNITY 3D DEVELOPER</h2>
          </div>
        </div>
        <div className="job-description">
          <div>
            <div>
              <text className="font-bold text-lg">Minimum Qualification</text>
              {" : "}
              <text className="text-gray-500 text-lg">Bachelors</text>
            </div>
            <div>
              <text className="font-bold text-lg">Experience Level</text>
              {" : "}
              <text className="text-gray-500 text-lg">Bachelors</text>
            </div>
            <div>
              <text className="font-bold text-lg">Experience Length</text>
              {" : "}
              <text className="text-gray-500 text-lg">Bachelors</text>
            </div>
            <div>
              <text className="font-bold text-lg">Location</text>
              {" : "}
              <text className="text-gray-500 text-lg">Bachelors</text>
            </div>
            <div>
              <text className="font-bold text-lg">Application Deadline</text>
              {" : "}
              <text className="text-gray-500 text-lg">Bachelors</text>
            </div>
            <div>
              <text className="font-bold text-lg">Salary Range</text>
              {" : "}
              <text className="text-gray-500 text-lg">10K-20K</text>
            </div>
          </div>
          <button
            className="bg-accentColor rounded-full h-[50px] text-white font-poppins font-semibold px-[52px] py-[10px] hover:opacity-90"
            onClick={() => navigate("/apply-job/hello")}
          >
            Apply Now
          </button>
        </div>
        <h1 className="font-bold text-2xl mt-10">Job Description</h1>
        <p className="mt-10 text-justify text-lg">
          We are Searching for a talented and motivated Laravel developer to
          join our team. As a Laravel developer, you will be responsible for
          designing and developing web applications, APIs, and other web
          services. You will be working in a team of back-end developers, and
          communicating with front-end developers to create a seamless web
          application.
        </p>
        <br />
        <p className="mb-10 text-justify text-lg">
          We are looking for a Laravel developer to join our team. You will be
          We are Searching for a talented and motivated Laravel developer to
          join our team. As a Laravel developer, you will be responsible for
          designing and developing web applications, APIs, and other web
          services. You will be working in a team of back-end developers, and
          communicating with front-end developers to create a seamless web
          application.
        </p>
        <h1 className="font-bold text-2xl">Laravel Development Requirements</h1>

        <ul className="list pb-10">
          <li className="text-lg">
            A degree in Computer Science or a related field
          </li>
          <li className="text-lg">Experience working with PHP</li>
          <li className="text-lg">
            Laravel utilizes Composer, a dependency management tool for PHP.
          </li>
          <li className="text-lg">
            Composer on your system to manage the project's dependencies and
            packages effectively.
          </li>
          <li className="text-lg">
            {" "}
            Laravel supports various databases, including MySQL, PostgreSQL,
            SQLite, and SQL Server.
          </li>
          <li className="text-lg">
            Choose a text editor or an integrated development environment (IDE).
          </li>
          <li className="text-lg">
            Make sure you have a compatible version of PHP as specified by
            Laravel's documentation.
          </li>
        </ul>
        <h1 className="font-bold text-2xl">Responsibilities</h1>
        <ul className="list pb-10">
          <li className="text-lg">
            A degree in Computer Science or a related field
          </li>
          <li className="text-lg">Experience working with PHP</li>
          <li className="text-lg">
            Laravel utilizes Composer, a dependency management tool for PHP.
          </li>
          <li className="text-lg">
            Composer on your system to manage the project's dependencies and
            packages effectively.
          </li>
          <li className="text-lg">
            {" "}
            Laravel supports various databases, including MySQL, PostgreSQL,
            SQLite, and SQL Server.
          </li>
          <li className="text-lg">
            Choose a text editor or an integrated development environment (IDE).
          </li>
          <li className="text-lg">
            Make sure you have a compatible version of PHP as specified by
            Laravel's documentation.
          </li>
        </ul>
      </div>
    </div>
  );
};
