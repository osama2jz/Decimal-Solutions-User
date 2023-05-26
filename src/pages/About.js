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
      <div class="heading mt-10">
        <div class="team-titles">
          <span class="title"> &lt;&nbsp;OUR TEAM&nbsp;&gt; </span>
          <h2 className="font-bold">We are team of experts</h2>
        </div>
      </div>
      <TeamCards />
    </>
  );
};

export default About;
