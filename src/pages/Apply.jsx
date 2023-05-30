import React, { useState } from "react";
import HiringProcess from "../components/career/HiringProcess";
import { useForm } from "@mantine/form";
import {
  Flex,
  Group,
  Loader,
  Select,
  SimpleGrid,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { DatePicker } from "@mantine/dates";
import { IconPhoto, IconUpload, IconX } from "@tabler/icons-react";
import { Check, Upload } from "tabler-icons-react";
import { backendUrl } from "../constants";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const Applyjob = () => {
  const { jobData } = useLocation().state;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setIsSubmitted] = useState(false);
  const form = useForm({
    initialValues: {
      fullName: "",
      email: "",
      resume: "",
      DOB: "",
      gender: "",
      address: "",
      applicantComments: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      fullName: (value) => (value.length < 2 ? "Enter full name" : null),
      DOB: (value) => (value.length < 2 ? "Enter date of birth" : null),
      gender: (value) => (value.length < 2 ? "Select gender" : null),
      address: (value) => (value.length < 2 ? "Enter full address" : null),
      // interestedIn: (value) => (value.length < 2 ?  : null),
    },
  });
  const applyforJob = (values) => {
    setIsLoading(true);
    values.job = jobData?.id;
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
        <div class="portfolio-heading">
          <div class="portfolio-title">
            <span class="por-title">
              {" "}
              &lt;&nbsp;USQUARE SOLUTIONS&nbsp;&gt;{" "}
            </span>
            <h2 className="font-bold text-3xl">UNITY 3D DEVELOPER</h2>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray">Apply Online</h1>
        <br />
        <p>Please fill the form to apply.</p>
        <br />
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
              <DatePicker
                placeholder="Date of Birth"
                size={"lg"}
                {...form.getInputProps("DOB")}
              />
              {/* <TextInput placeholder="Date of Birth" size="lg" /> */}
              <TextInput
                placeholder="Address"
                size="lg"
                {...form.getInputProps("address")}
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
                placeholder="Interested in"
                size="lg"
                {...form.getInputProps("applicantComments")}
              />
            </SimpleGrid>
            <Dropzone
              className="mt-5"
              onDrop={(files) => console.log("accepted files", files)}
              onReject={(files) => console.log("rejected files", files)}
              maxSize={3 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
            >
              <Group
                position="center"
                spacing="xl"
                style={{ minHeight: "150px", pointerEvents: "none" }}
              >
                <Dropzone.Accept>
                  <IconUpload size="3.2rem" stroke={1.5} />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    size="3.2rem"
                    stroke={1.5}
                    // color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]}
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <Upload size="3.2rem" />
                </Dropzone.Idle>

                <div>
                  <Text size="xl" inline>
                    Upload Your Resume here{" "}
                  </Text>
                </div>
              </Group>
            </Dropzone>

            <button
              type="submit"
              className="flex float-right bg-accentColor text-white font-bold text-lg px-10 py-2 rounded-full mt-10 ml-auto mb-20"
            >
              Submit
            </button>
          </form>
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
