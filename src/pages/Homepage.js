import React from "react";
import SliderImages from "../components/home/Landing-Page/SliderImages";
import Services from "../components/home/Landing-Page/Services";
import Achievement from "../components/home/Achievements/Achievement";
import Projects from "../components/home/Projects/Projects";
import WorkingProcess from "../components/home/Working-Process/WorkingProcess";
import Technology from "../components/home/Technologies/Technology";
import Testimonial from "../components/home/Testimonials/Testimonial";
import Carousel from '../Carousel';

export default function Homepage() {
  return (
    <div>
      {/* <Carousel /> */}
      <SliderImages />
      <Services />
      <Achievement />
      <Projects />
      <WorkingProcess />
      <Technology />
      <Testimonial />
    </div>
  );
}
