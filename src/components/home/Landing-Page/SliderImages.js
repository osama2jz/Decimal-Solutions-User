import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Banner1 from "../../../assets/images/new-banner-1.jpeg";
import { backendUrl } from "../../../constants";
import Wrapper from "./SliderImagesWrapper";

function SliderImages() {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([Banner1, Banner1]);
  const settings = {
    dots: true,

    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // useEffect(() => {
  //   setIsLoading(true);
  //   axios.get(backendUrl + `/api/v1/web/sliderImages`).then((res) => {
  //     setImages(res.data.data[0].images);
  //     setIsLoading(false);
  //   });
  // }, []);
  return (
    <Wrapper>
      <div>
        <Slider {...settings} arrows={false}>
          {/* <div className="img-slider-header">
            <div className="slide active">
              <img src={Banner1} alt="People working in an office" />
              <div className="content">
                <div className="diagonals">
                  <div className="diagonal thick"></div>
                  <div className="diagonal thin"></div>
                </div>
                <div className="text">
                  <h1>
                    Welcome to <br />
                    Decimal Solutions...
                  </h1>
                </div>
              </div>
            </div>
          </div> */}
          {images?.map((obj, index) => (
            <div className="img-slider-headerr overflow-hidden" key={index}>
              <div className="slide active overflow-hidden">
                <img
                  src={obj}
                  alt="People working in an office"
                  width={"100%"}
                />
              </div>
            </div>
          ))}
          {/*<div className="img-slider-header">
            <div className="slide active">
              <img src={Banner4} alt="People working in an office" />
              <div className="content">
                <div className="diagonals">
                  <div className="diagonal thick"></div>
                  <div className="diagonal thin"></div>
                </div>
                <div className="text">
                  <h1>
                    Web Application <br />
                    Development By <br/>
                    Professionals
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="img-slider-header">
            <div className="slide active">
              <img src={Banner4} alt="People working in an office" />
              <div className="content">
                <div className="diagonals">
                  <div className="diagonal thick"></div>
                  <div className="diagonal thin"></div>
                </div>
                <div className="text">
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
