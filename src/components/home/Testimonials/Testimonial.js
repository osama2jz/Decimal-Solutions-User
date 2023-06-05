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
        {!test.length ? <Loader /> :  (
          <Slider {...settings} className="slider">
            {test.map((obj) => (
              <div class="slider__contents">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "3rem",
                  }}
                >
                  <div class="heading">
                    <div class="testimonials-desc">
                      <span class="title">
                        {" "}
                        &lt;&nbsp;Testimonials&nbsp;&gt;{" "}
                      </span>
                      <h3>Client Testimonial</h3>
                    </div>
                  </div>
                  {/* <h2 class="slider__caption">Muhammad Ali</h2> */}

                  <div class="image__container">
                    <QuotesIcon className="quotes__icon" />
                    <img class="slider__image" src={obj?.image} alt="Client" />
                  </div>
                  <div>
                    <h2 class="slider__caption">{obj?.name}</h2>
                    <p class="role">{obj?.designation}</p>
                    <p class="slider__txt">{obj?.testimonial}</p>
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
