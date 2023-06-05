import { Button, CopyButton, Loader, Select, Title } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../../constants";

const JobPosting = ({ jobData }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex-1 aspect-[1.4] overflow-hidden flex flex-col items-center justify-center gap-[10px] rounded-[24px] border-2 border-boxColor md:py-[30px]">
      <h1 className="font-semibold sm:text-[30px] md:mt-0 sm:py-3">
        {jobData?.title}
      </h1>
      <p className="2xl:text-[16px] whitespace-nowrap">{jobData?.category?.title}</p>
      <p className="2xl:text-[16px] overflow-hidden">Vacancy: {jobData?.vacancies}</p>
      <button
        className="bg-accentColor rounded-full text-white font-poppins font-semibold px-[52px] py-[10px]"
        onClick={() =>
          navigate("/view-job/hehe", { state: { jobData: jobData } })
        }
      >
        Read More
      </button>
    </div>
  );
};

const Jobs = ({ title, type, seats }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get(backendUrl + "/api/v1/web/jobs").then((res) => {
      setJobs(res.data.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <div>
      <div className="career-Filters">
        <div class="job-heading">
          <div class="jobs-title">
            <span class="job-title"> &lt;&nbsp;Job Filter&nbsp;&gt; </span>
            <h2 className="text-3xl font-bold">
              Find your desired jobs & get recruited!
            </h2>
          </div>
        </div>

        {/* <div className="select-div">
          <Select
            data={["Develpoment", "Designing", "Marketing", "Sales"]}
            placeholder="Category"
            radius="md"
            size="lg"
          />
          <Select
            placeholder="Type"
            data={["Fulltime", "Partime", "Hybrid"]}
            radius="md"
            size="lg"
          />
          <Select
            data={["Islamabad"]}
            placeholder="Location"
            radius="md"
            size="lg"
          />

          <button className="bg-white rounded-lg text-accentColor font-poppins font-semibold px-[52px] py-[10px] hover:opacity-90">
            Filter
          </button>
        </div> */}
      </div>

      {isLoading ? (
        <Loader
          size={"xl"}
          color="purple"
          style={{ margin: "auto", marginBlock: "100px" }}
        />
      ) : (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20 w-[80%] m-auto my-20">
          {jobs.length ? (
            jobs.map((job) => <JobPosting jobData={job} />)
          ) : (
            <Title>No Job Available</Title>
          )}
        </div>
      )}
    </div>
  );
};

export default Jobs;
