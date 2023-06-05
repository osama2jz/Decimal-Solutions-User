import React, { useEffect, useState } from "react";
import { ReactComponent as PlaneIcon } from "../../../assets/icons/plane.svg";
import Banner1 from "../../../assets/images/new-banner-1.jpeg";
import Banner2 from "../../../assets/images/new-banner-2.jpeg";
import Banner3 from "../../../assets/images/new-banner-3.jpeg";
import Banner4 from "../../../assets/images/new-banner-4.jpeg";
import Carousel from "react-bootstrap/Carousel";
import Wrapper from "./SliderImagesWrapper";
import Slider from "react-slick";
import axios from "axios";
import { backendUrl } from "../../../constants";
import { Loader } from "@mantine/core";

function SliderImages() {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    setIsLoading(true);
    axios.get(backendUrl + `/api/v1/web/sliderImages`).then((res) => {
      setImages(res.data.data[0].images);
      setIsLoading(false);
    });
  }, []);
  return (
    <Wrapper>
      <div>
        <Slider {...settings}>
          <div class="img-slider-header">
            <div class="slide active">
              <img src={Banner1} alt="People working in an office" />
              <div class="content">
                <div class="diagonals">
                  <div class="diagonal thick"></div>
                  <div class="diagonal thin"></div>
                </div>
                <div class="text">
                  <h1>
                    Welcome to <br />
                    Decimal Solutions...
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {images?.map((obj) => (
            <div class="img-slider-header">
              <div class="slide active">
                <img src={obj} alt="People working in an office" />
              </div>
            </div>
          ))}
          {/*<div class="img-slider-header">
            <div class="slide active">
              <img src={Banner4} alt="People working in an office" />
              <div class="content">
                <div class="diagonals">
                  <div class="diagonal thick"></div>
                  <div class="diagonal thin"></div>
                </div>
                <div class="text">
                  <h1>
                    Web Application <br />
                    Development By <br/>
                    Professionals
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="img-slider-header">
            <div class="slide active">
              <img src={Banner4} alt="People working in an office" />
              <div class="content">
                <div class="diagonals">
                  <div class="diagonal thick"></div>
                  <div class="diagonal thin"></div>
                </div>
                <div class="text">
                  <h1>
                    Best ERP Solutions <br />
                    For Online Business
                  </h1>
                </div>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </Wrapper>
  );
}

export default SliderImages;
