import React from "react";
import HeroSection from "../components/career/HeroSection";
import Jobs from "../components/career/Jobs";
import CareerTitle from "../components/career/CareerTitle";
import HiringProcess from "../components/career/HiringProcess";

const Career = () => {
  return (
    <>
      <CareerTitle />
      <HiringProcess />
      <HeroSection />
     
      <Jobs />
    </>
  );
};

export default Career;
