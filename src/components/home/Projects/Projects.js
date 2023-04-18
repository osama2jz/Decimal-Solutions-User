import React from "react";
import Carousel from "react-bootstrap/Carousel";
import kaiya from "../../../assets/images/Kaiya.jpg";
import satoshi from "../../../assets/images/Satoshi VR.jpg";
import plantCare from "../../../assets/images/Plant Care.jpg";
import Banner3 from "../../../assets/images/new-banner-3.jpeg";
import { ReactComponent as AppIcon } from "../../../assets/svgs/App Development.svg";
import { ReactComponent as GraphicIcon } from "../../../assets/svgs/Graphic Desiging.svg";
import "../../../App.css";
import Wrapper from "./ProjectWrapper";
import { ReactComponent as LinkIcon } from "../../../assets/icons/link-outlined.svg";
import { CarouselItem } from "react-bootstrap";
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

function Services() {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
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
      <div className="projects-container">
        <div class="heading">
          <div class="project-titles">
            <span class="title"> &lt;&nbsp;OUR PROJECTS&nbsp;&gt; </span>
            <h2>Some Latest Client Projects</h2>
          </div>
        </div>
        <div class="project-tags">
          <button>All</button>
          <button>Web Development</button>
          <button>Mobile App Development</button>
          <button>Graphic Designing</button>
          <button>Digital Marketing</button>
          <button>ERP & Business Solutions</button>
          <button>AR/VR</button>
        </div>
      </div>
      <div
        style={{
          marginTop: "5rem",
          marginBottom: "5rem",
          marginLeft: "5rem",
          marginRight: "3rem",
        }}
      >
        <Slider {...settings}>
          <div class="carousel__slide">
            <div
              class="card"
              style={{
                marginRight: "3rem",
              }}
            >
              <div class="card__inner">
                <div class="card__image">
                  <img src={kaiya} alt="Kaiya Screenshot" />
                </div>
              </div>
              <div class="hover__overlay">
                <h3>Kaiya</h3>
                <p>
                  We are offering a huge variety of services from web
                  development to web hosting.
                </p>
                <a href="#" class="link__icon">
                  <LinkIcon />
                </a>
              </div>
            </div>
          </div>
          <div class="carousel__slide">
            <div
              class="card"
              style={{
                marginRight: "3rem",
              }}
            >
              <div class="card__inner">
                <div class="card__image">
                  <img src={satoshi} alt="Satoshi Screenshot" />
                </div>
              </div>
              <div class="hover__overlay">
                <h3>Kaiya</h3>
                <p>
                  We are offering a huge variety of services from web
                  development to web hosting.
                </p>
                <a href="#" class="link__icon">
                  <LinkIcon />
                </a>
              </div>
            </div>
          </div>
          <div class="carousel__slide">
            <div
              class="card"
              style={{
                marginRight: "3rem",
              }}
            >
              <div class="card__inner">
                <div class="card__image">
                  <img src={plantCare} alt="Plant Care" />
                </div>
              </div>
              <div class="hover__overlay">
                <h3>Kaiya</h3>
                <p>
                  We are offering a huge variety of services from web
                  development to web hosting.
                </p>
                <a href="#" class="link__icon">
                  <LinkIcon />
                </a>
              </div>
            </div>
          </div>
          <div class="carousel__slide">
            <div
              class="card"
              style={{
                marginRight: "3rem",
              }}
            >
              <div class="card__inner">
                <div class="card__image">
                  <img src={plantCare} alt="plant Care Screenshot" />
                </div>
              </div>
              <div class="hover__overlay">
                <h3>Kaiya</h3>
                <p>
                  We are offering a huge variety of services from web
                  development to web hosting.
                </p>
                <a href="#" class="link__icon">
                  <LinkIcon />
                </a>
              </div>
            </div>
          </div>
          <div class="carousel__slide">
            <div
              class="card"
              style={{
                marginRight: "3rem",
              }}
            >
              <div class="card__inner">
                <div class="card__image">
                  <img src={satoshi} alt="Satoshi Screenshot" />
                </div>
              </div>
              <div class="hover__overlay">
                <h3>Kaiya</h3>
                <p>
                  We are offering a huge variety of services from web
                  development to web hosting.
                </p>
                <a href="#" class="link__icon">
                  <LinkIcon />
                </a>
              </div>
            </div>
          </div>
          <div class="carousel__slide">
            <div
              class="card"
              style={{
                marginRight: "3rem",
              }}
            >
              <div class="card__inner">
                <div class="card__image">
                  <img src={kaiya} alt="Plant Care" />
                </div>
              </div>
              <div class="hover__overlay">
                <h3>Kaiya</h3>
                <p>
                  We are offering a huge variety of services from web
                  development to web hosting.
                </p>
                <a href="#" class="link__icon">
                  <LinkIcon />
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
}

export default Services;
