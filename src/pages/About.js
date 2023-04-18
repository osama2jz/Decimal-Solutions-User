import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Identity from "../components/AboutUs/Identity";
import Mission from "../components/AboutUs/Mission";
import Progress from "../components/AboutUs/Progress";
import TeamCards from "../components/AboutUs/TeamCards";

const About = () => {
  return (
    <>
      <AboutUs />
      <Mission />
      <Identity />
      <Progress />
      <TeamCards />
    </>
  );
};

export default About;
