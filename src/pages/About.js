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
      <div className="heading mt-10">
        <div className="team-titles">
          <span className="title"> &lt;&nbsp;OUR TEAM&nbsp;&gt; </span>
          <h2 className="font-bold">We are team of experts</h2>
        </div>
      </div>
      <TeamCards />
    </>
  );
};

export default About;
