import React from "react";
import HiringProcess from "../components/career/HiringProcess";
import { useForm } from "@mantine/form";
import { Select, SimpleGrid, TextInput } from "@mantine/core";
// import { DatePicker } from "@mantine/dates";
// import { DatePicker } from "@mantine/dates";
// import { IconUpload, IconPhoto, IconX } from '@tabler/icons';

export const Applyjob = () => {
  const form = useForm({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      cv: "",
      dob: null,
      gender: "",
      address: "",
    },
  });

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
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <SimpleGrid cols={2} spacing="xl" verticalSpacing="lg">
            <TextInput placeholder="Full Name" size="lg" />
            <TextInput placeholder="Email" size="lg" />
            {/* <DatePicker placeholder="Date of Birth" /> */}
            <TextInput placeholder="Date of Birth" size="lg" />
            <TextInput placeholder="Address" size="lg" />
            <Select
              placeholder="Gender"
              data={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
              ]}
              size="lg"
            />
            <TextInput placeholder="Interested in" size="lg" />
          </SimpleGrid>
          <button className="flex float-right bg-accentColor text-white font-bold text-lg px-10 py-2 rounded-full mt-10 ml-auto mb-20">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
