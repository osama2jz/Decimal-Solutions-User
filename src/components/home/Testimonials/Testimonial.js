import React from "react";
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import testomoniesStock from "../../../assets/images/testomonies-stock.jpg";
import { ReactComponent as QuotesIcon } from "../../../assets/icons/quotes-left.svg";
import Wrapper from "./TestimonialWrapper";
import Slider from "react-slick";

function Technology() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <div style={{marginTop: '5rem', marginBottom: '5rem'}}  >
      <Slider {...settings} className="slider" >
        <div class="slider__contents" >
        <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', marginBottom: '3rem'}}>
            <div class="heading" >
              <div class="testimonials-desc">
                <span class="title"> &lt;&nbsp;Testimonials&nbsp;&gt; </span>
                <h3>Client Testimonial</h3>
              </div>
            </div>
            {/* <h2 class="slider__caption">Muhammad Ali</h2> */}

            <div class="image__container">
              <QuotesIcon className="quotes__icon" />
              <img class="slider__image" src={testomoniesStock} alt="Client" />
            </div>
            <div>
            <h2 class="slider__caption">Muhammad Ali</h2>
            <p class="role">Boxer at Rawalpindi Boxing Club</p>
            <p class="slider__txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              cupiditate omnis possimus illo quos, corporis minima!
            </p>
            </div>
          </div>
          </div>
          <div class="slider__contents">
          <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', marginBottom: '3rem'}}>
            <div class="heading">
              <div class="testimonials-desc">
                <span class="title"> &lt;&nbsp;Testimonials&nbsp;&gt; </span>
                <h3>Client Testimonial</h3>
              </div>
            </div>
            <div class="image__container">
              <QuotesIcon className="quotes__icon" />
              <img class="slider__image" src={testomoniesStock} alt="Client" />
            </div>
            <h2 class="slider__caption">Muhammad Ali</h2>
            <p class="role">Boxer at Rawalpindi Boxing Club</p>
            <p class="slider__txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              cupiditate omnis possimus illo quos, corporis minima!
            </p>
          </div>
          </div>
          <div class="slider__contents">
          <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', marginBottom: '3rem'}}>
            <div class="heading">
              <div class="testimonials-desc">
                <span class="title"> &lt;&nbsp;Testimonials&nbsp;&gt; </span>
                <h3>Client Testimonial</h3>
              </div>
            </div>
            <div class="image__container">
              <QuotesIcon className="quotes__icon" />
              <img class="slider__image" src={testomoniesStock} alt="Client" />
            </div>
            <h2 class="slider__caption">Muhammad Ali</h2>
            <p class="role">Boxer at Rawalpindi Boxing Club</p>
            <p class="slider__txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              cupiditate omnis possimus illo quos, corporis minima!
            </p>
          </div>
          </div>
      </Slider>
      </div>
      {/* <Carousel
        variant="dark"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
        className="slider"
      >
        <Carousel.Item>
          <div class="slider__contents">
            <div class="heading">
              <div class="testimonials-desc">
                <span class="title"> &lt;&nbsp;Testimonials&nbsp;&gt; </span>
                <h2>Client Testimonial</h2>
              </div>
            </div>
            <div class="image__container">
              <QuotesIcon className="quotes__icon" />
              <img class="slider__image" src={testomoniesStock} alt="Client" />
            </div>
            <h2 class="slider__caption">Muhammad Ali</h2>
            <p class="role">Boxer at Rawalpindi Boxing Club</p>
            <p class="slider__txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              cupiditate omnis possimus illo quos, corporis minima!
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="slider__contents">
            <div class="heading">
              <div class="testimonials-desc">
                <span class="title"> &lt;&nbsp;Testimonials&nbsp;&gt; </span>
                <h3>Client Testimonial</h3>
              </div>
            </div>
            <div class="image__container">
              <QuotesIcon className="quotes__icon" />
              <img class="slider__image" src={testomoniesStock} alt="Client" />
            </div>
            <h2 class="slider__caption">Muhammad Ali</h2>
            <p class="role">Boxer at Rawalpindi Boxing Club</p>
            <p class="slider__txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              cupiditate omnis possimus illo quos, corporis minima!
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="slider__contents">
            <div class="heading">
              <div class="testimonials-desc">
                <span class="title"> &lt;&nbsp;Testimonials&nbsp;&gt; </span>
                <h3>Client Testimonial</h3>
              </div>
            </div>
            <div class="image__container">
              <QuotesIcon className="quotes__icon" />
              <img class="slider__image" src={testomoniesStock} alt="Client" />
            </div>
            <h2 class="slider__caption">Muhammad Ali</h2>
            <p class="role">Boxer at Rawalpindi Boxing Club</p>
            <p class="slider__txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              cupiditate omnis possimus illo quos, corporis minima!
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="slider__contents">
            <div class="heading">
              <div class="testimonials-desc">
                <span class="title"> &lt;&nbsp;Testimonials&nbsp;&gt; </span>
                <h3>Client Testimonial</h3>
              </div>
            </div>
            <div class="image__container">
              <QuotesIcon className="quotes__icon" />
              <img class="slider__image" src={testomoniesStock} alt="Client" />
            </div>
            <h2 class="slider__caption">Muhammad Ali</h2>
            <p class="role">Boxer at Rawalpindi Boxing Club</p>
            <p class="slider__txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              cupiditate omnis possimus illo quos, corporis minima!
            </p>
          </div>
        </Carousel.Item>
      </Carousel> */}
    </Wrapper>
  );
}

export default Technology;
