import { Loader, Title } from "@mantine/core";
import axios from "axios";
import React, { useEffect } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Slider from "react-slick";
import "../../../src/App.css";
import { ReactComponent as LinkIcon } from "../../../src/assets/icons/link-outlined.svg";
import { backendUrl } from "../../constants";
import Wrapper from "./ProjectWrapper";
import porfolio from "./porfolio.png";
import { useNavigate } from "react-router-dom";

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
const AllProjects = () => {
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
  const backgroundImage = {
    backgroundImage: `url("${porfolio}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const [isLoading, setIsLoading] = React.useState(false);
  const [filter, setFilter] = React.useState("all");
  const [porfolioData, setPorfolioData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [services, setServices] = React.useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    setIsLoading(true);
    axios.get(backendUrl + "/api/v1/web/groupedprojects").then((res) => {
      setPorfolioData(res.data.data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios.get(backendUrl + `/api/v1/web/services`).then((res) => {
      setServices(res.data.data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (filter === "all") setFilteredData(porfolioData);
    else {
      let filtered = porfolioData.filter((obj) => {
        return obj.category === filter;
      });
      setFilteredData(filtered);
    }
  }, [filter, porfolioData]);
  return (
    <Wrapper>
      <div>
        <div className=""></div>
        <div
          className="relative h-[498px] w-auto bg-slate-700 text-white"
          style={backgroundImage}
        >
          <div className="absolute h-full w-full bg-black opacity-50"></div>
          <h1 className=" xs:text-1xl absolute flex h-full w-full items-center justify-center font-bold  sm:text-2xl md:text-3xl lg:text-5xl">
            OUR PROJECTS
          </h1>
        </div>
        <div className="projects-container">
          <div class="project-tags">
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
                  backgroundColor: filter === obj?.title ? "purple" : "white",
                  color: filter === obj?.title ? "white" : "black",
                }}
                onClick={() => setFilter(obj?.title)}
              >
                {obj.title}
              </button>
            ))}
          </div>
        </div>
        {isLoading ? (
          <Loader
            size={"xl"}
            color="purple"
            style={{ margin: "auto", marginBlock: "100px" }}
          />
        ) : (
          <>
            {filteredData.length ? (
              filteredData?.map((portfolio, index) => {
                return (
                  <div className="container mx-auto px-10 mt-10" key={index}>
                    <div class="portfolio-heading">
                      <div class="portfolio-title">
                        <span class="por-title">
                          {" "}
                          &lt;&nbsp;{portfolio?.category}&nbsp;&gt;{" "}
                        </span>
                      </div>
                    </div>
                    <Slider {...settings}>
                      {portfolio?.projects?.map((card, index) => {
                        return (
                          <div class="carousel__slide mb-10">
                            <div
                              class="card"
                              style={{
                                marginRight: "6rem",
                              }}
                              onClick={()=>navigate("/project-detail",
                              {
                                state:{projectData:card, category:portfolio?.category
                                }
                              })}
                            >
                              <div class="card__inner">
                                <div class="card__image">
                                  <img
                                    src={card?.coverImage}
                                    alt="Kaiya Screenshot"
                                  />
                                </div>
                              </div>
                              <div class="hover__overlay">
                                <h3>{card?.title}</h3>
                                <p>{card?.description}</p>

                                <a href={card?.link} class="link__icon">
                                  <LinkIcon />
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                );
              })
            ) : (
              <Title className="text-center my-10">No Project Found.</Title>
            )}
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default AllProjects;
