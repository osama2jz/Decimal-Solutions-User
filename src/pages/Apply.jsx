import {
  Flex,
  Loader,
  Select,
  SimpleGrid,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Check } from "tabler-icons-react";
import DropZone from "../components/Dropzone";
import HiringProcess from "../components/career/HiringProcess";
import { backendUrl } from "../constants";

export const Applyjob = () => {
  const { jobData } = useLocation().state;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setIsSubmitted] = useState(false);
  const form = useForm({
    initialValues: {
      fullName: "",
      email: "",
      resume: null,
      contactNumber: "",
      whatsappNumber: "",
      yearsOfExperience: "",
      gender: "",
      address: "",
      applicantComments: "",
    },
    validateInputOnBlur: true,
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      fullName: (value) => (value.length < 2 ? "Enter full name" : null),
      contactNumber: (value) =>
        !/^\+?[0-9]{10,14}$/.test(value) ? "Enter valid contact number" : null,
      whatsappNumber: (value) =>
        !/^\+?[0-9]{10,14}$/.test(value) ? "Enter whatsapp number" : null,
      yearsOfExperience: (value) =>
        value.length < 1 ? "Select experience" : null,
      gender: (value) => (value.length < 1 ? "Select gender" : null),
      address: (value) => (value.length < 1 ? "Enter city" : null),
      resume: (value) => (!value ? "Upload Resume" : null),
    },
  });
  const applyforJob = (values) => {
    setIsLoading(true);
    values.job = jobData?._id;
    axios
      .post(backendUrl + "/api/v1/web/jobApplications", values)
      .then((res) => {
        setIsLoading(false);
        setIsSubmitted(true);
      });
  };
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
        <div className="portfolio-heading">
          <div className="portfolio-title">
            <span className="por-title">
              &lt;&nbsp;USQUARE SOLUTIONS&nbsp;&gt;{" "}
            </span>
          </div>
        </div>
        {submitted ? (
          <Flex justify={"center"} align={"center"} gap={"md"}>
            <Check color="purple" size={"50px"} />
            <Title>Application Submitted</Title>
          </Flex>
        ) : isLoading ? (
          <Flex justify={"center"} align={"center"} gap={"md"}>
            <Loader color="purple" />
            <Title>Submitting Application</Title>
          </Flex>
        ) : (
          <>
            <h2 className="font-bold text-3xl flex item-center justify-center">{jobData?.title}</h2>
            <h1 className="text-2xl font-bold text-gray">Apply Online</h1>
            <br />
            <p>Please fill the form to apply.</p>
            <br />
            <form onSubmit={form.onSubmit((values) => applyforJob(values))}>
              <SimpleGrid cols={2} spacing="xl" verticalSpacing="lg">
                <TextInput
                  placeholder="Full Name"
                  size="lg"
                  {...form.getInputProps("fullName")}
                />
                <TextInput
                  placeholder="Email"
                  size="lg"
                  {...form.getInputProps("email")}
                />
                <Select
                  placeholder="Gender"
                  data={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                  ]}
                  size="lg"
                  {...form.getInputProps("gender")}
                />
                <TextInput
                  placeholder="City"
                  size="lg"
                  {...form.getInputProps("address")}
                />
                <TextInput
                  placeholder="Contact Number"
                  size="lg"
                  type="number"
                  {...form.getInputProps("contactNumber")}
                />
                <TextInput
                  placeholder="Whatsapp Number"
                  size="lg"
                  type="number"
                  {...form.getInputProps("whatsappNumber")}
                />
                <Select
                  placeholder="Experience (in Years)"
                  data={["0-1", "1-3", "3-5", "5-8", "8-10", "10-15", "15+"]}
                  size="lg"
                  {...form.getInputProps("yearsOfExperience")}
                />
              </SimpleGrid>
              <DropZone
                form={form}
                folderName={"jobApplications"}
                name={"resume"}
                label="Resume"
              />

              <button
                type="submit"
                className="flex float-right bg-accentColor text-white font-bold text-lg px-10 py-2 rounded-full mt-10 ml-auto mb-20"
              >
                Submit
              </button>
            </form>
          </>
        )}
        {submitted && (
          <button
            onClick={() => navigate("/career")}
            className="flex float-right bg-accentColor text-white font-bold text-lg px-10 py-2 rounded-full mt-10 ml-auto mb-20"
          >
            Go Back
          </button>
        )}
      </div>
    </div>
  );
};
