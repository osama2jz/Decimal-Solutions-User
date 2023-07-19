import { Title } from "@mantine/core";
import axios from "axios";
import React, { useEffect } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import Slider from "react-slick";
import "../../../App.css";
import { ReactComponent as LinkIcon } from "../../../assets/icons/link-outlined.svg";
import { backendUrl } from "../../../constants";
import Wrapper from "./ProjectWrapper";

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
  const [filter, setFilter] = React.useState("all");
  const [isLoading, setIsLoading] = React.useState(false);
  const [projectData, setProjectData] = React.useState([]);
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
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(backendUrl + `/api/v1/web/homeScreenProjects/all`)
      .then((res) => {
        setProjectData(res.data.data);
        setIsLoading(false);
      });
  }, [filter]);
  // useEffect(() => {
  //   setIsLoading(true);
  //   axios.get(backendUrl + `/api/v1/web/services`).then((res) => {
  //     setServices(res.data.data);
  //     setIsLoading(false);
  //   });
  // }, []);
  return (
    <Wrapper>
      <div className="projects-container">
        <div className="heading">
          <div className="project-titles">
            <span  style={{
                    color: "#a4238c",
                    textAlign: "center",
                    fontSize: "25.6px"
                  }}> &lt;&nbsp;OUR PROJECTS&nbsp;&gt; </span>
            <h1  style={{
                    color: "black",
                    textAlign: "center",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}>Some Latest Client Projects</h1>
          </div>
        </div>
        {/* <div className="project-tags">
          <button
            style={{
              backgroundColor: filter === "all" ? "purple" : "white",
              color: filter === "all" ? "white" : "black",
            }}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          {services.map((obj, ind) => (
            <button
              style={{
                backgroundColor: filter === obj._id ? "purple" : "white",
                color: filter === obj?._id ? "white" : "black",
              }}
              onClick={() => setFilter(obj._id)}
            >
              {obj.title}
            </button>
          ))} */}
        {/* </div> */}
      </div>
      <div
        style={{
          marginTop: "50px",
          marginBottom: "30px",
          marginLeft: "3rem",
          marginRight: "3rem",
        }}
      >
        <Slider {...settings}>
          {projectData.length ? (
            projectData.map((obj,index) => (
              <div className="carousel__slide" key={index}>
                <div
                  className="card"
                  style={{
                    marginRight: "3rem",
                  }}
                >
                  <div className="card__inner">
                    <div className="card__image">
                      <img src={obj?.coverImage} alt="Kaiya Screenshot" />
                    </div>
                  </div>
                  <div className="hover__overlay">
                    <h3>{obj?.title}</h3>
                    <p>{obj?.shortDescription}</p>
                    <a href="/view-projects" className="link__icon">
                      <LinkIcon />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Title>No Project Found</Title>
          )}
        </Slider>
      </div>
    </Wrapper>
  );
}

export default Services;
