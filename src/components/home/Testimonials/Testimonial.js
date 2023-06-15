import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ReactComponent as QuotesIcon } from "../../../assets/icons/quotes-left.svg";
import testomoniesStock from "../../../assets/images/testomonies-stock.jpg";
import Wrapper from "./TestimonialWrapper";
import axios from "axios";
import { backendUrl } from "../../../constants";
import { Loader } from "@mantine/core";

function Technology() {
  const [test, setTest] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    // setIsLoading(true);
    axios.get(backendUrl + "/api/v1/web/testimonial").then((res) => {
      setTest(res.data.data);
    });
  }, []);
  return (
    <Wrapper>
      <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        {!test.length ? (
          <Loader m="auto" color="purple" />
        ) : (
          <Slider {...settings} className="slider">
            {test.map((obj,index) => (
              <div className="slider__contents" key={index}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "3rem",
                  }}
                >
                  <div className="heading">
                    <div className="testimonials-desc">
                      <span className="title">
                        {" "}
                        &lt;&nbsp;Testimonials&nbsp;&gt;{" "}
                      </span>
                      <h3>Client Testimonial</h3>
                    </div>
                  </div>
                  {/* <h2 className="slider__caption">Muhammad Ali</h2> */}

                  <div className="image__container">
                    <QuotesIcon className="quotes__icon" />
                    <img className="slider__image" src={obj?.image} alt="Client" />
                  </div>
                  <div>
                    <h2 className="slider__caption">{obj?.name}</h2>
                    <p className="role">{obj?.designation}</p>
                    <p className="slider__txt">{obj?.testimonial}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </Wrapper>
  );
}

export default Technology;
