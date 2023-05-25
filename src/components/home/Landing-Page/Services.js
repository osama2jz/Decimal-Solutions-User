import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner4 from "../../../assets/images/new-banner-4.jpeg";
import Banner1 from "../../../assets/images/new-banner-1.jpeg";
import Banner2 from "../../../assets/images/new-banner-2.jpeg";
import Banner3 from "../../../assets/images/new-banner-3.jpeg";
import { ReactComponent as WebIcon } from "../../../assets/svgs/Web Development.svg";
import { ReactComponent as AppIcon } from "../../../assets/svgs/App Development.svg";
import { ReactComponent as GraphicIcon } from "../../../assets/svgs/Graphic Desiging.svg";
import { ReactComponent as ErpIcon } from "../../../assets/svgs/ERP.svg";
import { ReactComponent as MarketingIcon } from "../../../assets/svgs/Digital Marketing.svg";
import { ReactComponent as ARIcon } from "../../../assets/svgs/AR VR.svg";
import "../../../App.css";
import Wrapper from "../../../AppWrapper";
import { ReactComponent as LinkIcon } from "../../../assets/icons/link-outlined.svg";
import { CarouselItem } from "react-bootstrap";
import Slider from "react-slick";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style,  background: "black", }}
//       onClick={onClick}
//     />
//   );
// }
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
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
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
      <div
        style={{
          marginTop: "5rem",
          marginBottom: "5rem",
          marginLeft: "5rem",
          marginRight: "3rem",
        }}
      >
        <div class="heading">
            <div class="services-title">
              <span class="ser-title"> &lt;&nbsp;Our Serives&nbsp;&gt; </span>
              <h2 className="font-bold text-xl">View some of our services</h2>
            </div>
          </div>
        <Slider {...settings}>
          <div style={{ marginRight: "3rem" }}>
            <div class="carousel__slide">
              <div class="card">
                <div class="card__inner">
                  <div class="numbering-inside">
                    <p class="text">01</p>
                  </div>
                  <div class="card__image">
                  <WebIcon className="img" />
                  </div>
                  <h3>Website Development</h3>
                </div>
                <div class="hover__overlay">
                  <p>
                    We are offering a huge variety of services from web
                    development to web hosting.
                  </p>
                  <a href="#" class="link__icon">
                  <LinkIcon className="img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginRight: "3rem" }}>
          <div class="carousel__slide">
              <div class="card">
                <div class="card__inner">
                  <div class="numbering-inside">
                    <p class="text">02</p>
                  </div>
                  <div class="card__image">
                  <AppIcon className="img" />
                  </div>
                  <h3 className="text-center mt-2">Mobile App Development</h3>
                </div>
                <div class="hover__overlay">
                  <p>
                    We are offering a huge variety of services from Mobile app 
                    development to application hosting.
                  </p>
                  <a href="#" class="link__icon">
                  <LinkIcon className="img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel__slide">
              <div class="card">
                <div class="card__inner">
                  <div class="numbering-inside">
                    <p class="text">03</p>
                  </div>
                  <div class="card__image">
                  <GraphicIcon className="img" />
                  </div>
                  <h3>Graphics Designing</h3>
                </div>
                <div class="hover__overlay">
                  <p>
                    We are offering a huge variety of services of website designings, 
                    App designing and game designing.
                  </p>
                  <a href="#" class="link__icon">
                  <LinkIcon className="img" />
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel__slide">
              <div class="card">
                <div class="card__inner">
                  <div class="numbering-inside">
                    <p class="text">04</p>
                  </div>
                  <div class="card__image">
                  <MarketingIcon className="img" />
                  </div>
                  <h3>Digital Marketing</h3>
                </div>
                <div class="hover__overlay">
                  <p>
                  Digital marketing empowers our diverse range of services in website
                   design, app development, and game design to effectively reach and engage with a wider audience.
                  </p>
                  <a href="#" class="link__icon">
                  <LinkIcon className="img" />
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel__slide">
              <div class="card">
                <div class="card__inner">
                  <div class="numbering-inside">
                    <p class="text">05</p>
                  </div>
                  <div class="card__image">
                  <ErpIcon className="img" />
                  </div>
                  <h3>ERP & Business Solutions</h3>
                </div>
                <div class="hover__overlay">
                  <p>
                  Unlock your business's full potential with our
                   comprehensive ERP and business solutions.
                  </p>
                  <a href="#" class="link__icon">
                  <LinkIcon className="img" />
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel__slide">
              <div class="card">
                <div class="card__inner">
                  <div class="numbering-inside">
                    <p class="text">06</p>
                  </div>
                  <div class="card__image">
                  <ARIcon className="img" />
                  </div>
                  <h3>AR/VR Games</h3>
                </div>
                <div class="hover__overlay">
                  <p>
                  Immerse yourself in a world of extraordinary experiences with 
                  our cutting-edge AR/VR games services, where reality and imagination collide.
                  </p>
                  <a href="#" class="link__icon">
                  <LinkIcon className="img" />
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
