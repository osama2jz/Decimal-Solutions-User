import React from "react";
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import mongo from "../../../assets/images/Tools-and-Tech/mongo.png";
import express from "../../../assets/images/Tools-and-Tech/express.png";
import react from "../../../assets/images/Tools-and-Tech/react.png";
import node from "../../../assets/images/Tools-and-Tech/node.png";
import vue from "../../../assets/images/Tools-and-Tech/vue.png";
import angular from "../../../assets/images/Tools-and-Tech/angular.png";
import aspnet from "../../../assets/images/Tools-and-Tech/aspnet.png";
import sql from "../../../assets/images/Tools-and-Tech/microsoftsql.png";
import python from "../../../assets/images/Tools-and-Tech/python.png";
import django from "../../../assets/images/Tools-and-Tech/djnago.png";
import java from "../../../assets/images/Tools-and-Tech/java.png";
import cplusplus from "../../../assets/images/Tools-and-Tech/cplusplus.png";
import Wrapper from "./TechnologyWrapper";
import Slider from "react-slick";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsFillArrowLeftCircleFill
      className={className}
      style={{
        ...style,
        color: "#A4238C",
        width: "38px",
        height: "38px",
        left: "-30px",
      }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsFillArrowRightCircleFill
      className={className}
      style={{
        ...style,
        color: "#A4238C",
        width: "38px",
        height: "38px",
        right: "-30px",
      }}
      onClick={onClick}
    />
  );
}

function Technology() {
  var settings = {
    // dots: true,
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <div className="our-tools">
        <div class="heading">
          <div class="tools-desc">
            <span class="title">&lt;&nbsp;Tools & Technologies&nbsp;&gt;</span>
            <h2>Working Technologies</h2>
            <p class="description">
              We ensure that you'll embark on a perfectly planned, safe vacation
              at a 
              price you can afford.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "5rem",
          marginBottom: "5rem",
          marginLeft: "5rem",
          marginRight: "3rem",
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center'
        }}
      >
        <Slider {...settings}  >
          <div class="entry" style={{background: 'pink'}} >
            <img
              src={mongo}
              alt="MongoDB Logo"
              style={{ width: "20rem", marginRight: "4rem" }}
            />
          </div>
          <div class="entry" style={{border: '1px solid black'}}>
            <img
              src={express}
              alt="Express.js Logo"
              style={{ width: "20rem", marginRight: "2rem" }}
            />
          </div>
          <div class="entry" style={{border: '1px solid black'}}>
            <img src={react} alt="React.js Logo" style={{ width: "20rem" }} />
          </div>
          <div class="entry">
            <img src={node} alt="Node.js Logo" style={{ width: "20rem" }} />
          </div>
          <div class="entry" style={{border: '1px solid black'}}>
            <img
              src={vue}
              alt="Vue.js Logo"
              style={{ width: "20rem", marginRight: "4rem" }}
            />
          </div>
          <div class="entry" style={{border: '1px solid black'}}>
            <img
              src={angular}
              alt="Angular Logo"
              style={{ width: "20rem", marginRight: "4rem" }}
            />
          </div>
          <div class="entry asp-net" style={{border: '1px solid black'}}>
            <img src={aspnet} alt=".ASP NET Logo" style={{ width: "20rem" }} />
          </div>
          <div class="entry" style={{border: '1px solid black'}}>
            <img
              src={sql}
              alt="Microsoft SQL Server Logo"
              style={{ width: "20rem" }}
            />
          </div>
          <div class="entry" style={{border: '1px solid black'}}>
            <img
              src={python}
              alt="Python Logo"
              style={{ width: "20rem", marginRight: "3rem" }}
            />
          </div>
          <div class="entry" style={{border: '1px solid black'}}>
            <img
              src={django}
              alt="Django Logo"
              style={{ width: "20rem", marginRight: "3rem" }}
            />
          </div>
          <div class="entry" style={{border: '1px solid black'}}>
            <img src={java} alt="Java Logo" style={{ width: "20rem" }} />
          </div>
          <div class="entry">
            <img src={cplusplus} alt="C++ Logo" style={{ width: "20rem" }} />
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
}

export default Technology;
