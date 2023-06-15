import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Slider from "react-slick";
import "../../../App.css";
import Wrapper from "../../../AppWrapper";
import { ReactComponent as LinkIcon } from "../../../assets/icons/link-outlined.svg";
import { backendUrl } from "../../../constants";

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
  const [isLoading, setIsLoading] = useState(false);
  const [services, setServices] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios.get(backendUrl + "/api/v1/web/services").then((res) => {
      setServices(res.data.data);
      setIsLoading(false);
    });
  }, []);
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
        <div className="heading">
          <div className="services-title">
            <span className="ser-title"> &lt;&nbsp;Our Services&nbsp;&gt; </span>
            <h2 className="font-bold text-xl">View some of our services</h2>
          </div>
        </div>
        <Slider {...settings}>
          {services.map((obj, index) => {
            return (
              <div style={{ marginRight: "3rem" }} key={index}>
                <div className="carousel__slide">
                  <div className="card">
                    <div className="card__inner">
                      <div className="numbering-inside">
                        <p className="text">{index+1}</p>
                      </div>
                      <div className="card__image">
                        <img src={obj?.homeImage} className="img" />
                      </div>
                      <h3>{obj.title}</h3>
                    </div>
                    <div className="hover__overlay">
                      <p>{obj?.shortDescription}</p>
                      <a href="/our-services" className="link__icon">
                        <LinkIcon className="img" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </Wrapper>
  );
}

export default Services;
