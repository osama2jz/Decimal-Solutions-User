import styled from "styled-components";
import test from "../../../assets/images/Testimonial.jpg";

const Wrapper = styled.section`
.slider {
    background-image: url(${test});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
     width: 100%;
    height: 90vh;
     position: relative;
    margin-bottom: 1rem;
     /* overflow: hidden; */
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center; 
    ju {
    position: absolute;
    top: 0;
    left: 0;
    width: 400%;
    height: 100%;
    -webkit-transition: left 0.4s;
    transition: left 0.4s;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
  }
  .slider__contents {
    height: 100%;
    padding: 0rem 2rem;
    text-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-flex-flow: column nowrap;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .testimonials-desc {
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // background-color: rgba(244, 244, 244, 0.862745098);
  }
  .testimonials-desc .title {
    color: #a4238c;
    font-size: 1.6rem;
  }
  @media all and (max-width: 1360px) {
     .testimonials-desc .title {
      font-size: 1.4rem;
    }
  }
  @media all and (max-width: 800px) {
     .testimonials-desc .title {
      font-size: 1.2rem;
    }
  }
  @media all and (max-width: 600px) {
     .testimonials-desc .title {
      font-size: 1rem;
    }
  }
  @media all and (max-width: 420px) {
     .testimonials-desc .title {
      font-size: 0.8rem;
    }
  }
   .testimonials-desc h2 {
    color: #3f3f3f;
    font-weight: 600;
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
  @media all and (max-width: 1360px) {
     .testimonials-desc h2 {
      font-size: 2.2rem;
    }
  }
  @media all and (max-width: 800px) {
     .testimonials-desc h2 {
      font-size: 1.8rem;
    }
  }
  @media all and (max-width: 600px) {
     .testimonials-desc h2 {
      font-size: 1.5rem;
    }
  }
  @media all and (max-width: 420px) {
     .testimonials-desc h2 {
      font-size: 1.2rem;
    }
  }
   .slider__contents .image__container {
    position: relative;
  }
   .slider__contents .image__container .quotes__icon {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 800px) {
     .slider__contents .image__container .quotes__icon {
      width: 40px;
      height: 40px;
    }
  }
   .slider__contents .image__container .slider__image {
    width: 220px;
    aspect-ratio: 1;
    object-fit: cover;
    border: 7px solid #a4238c;
    border-radius: 10px;
  }
  @media screen and (max-width: 800px) {
     .slider__contents .image__container .slider__image {
      width: 180px;
    }
  }
   .slider__contents .slider__caption {
    font-weight: 600;
    font-size: 1.6rem;
    color: #3f3f3f;
    margin-top: 1.4rem;
    margin-bottom: 0.6rem;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 800px) {
     .slider__contents .slider__caption {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }
   .slider__contents .role {
    color: #a4238c;
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 800px) {
     .slider__contents .role {
      font-size: 1rem;
      margin-bottom: 1.4rem;
    }
  }
   .slider__contents .slider__txt {
    color: #3f3f3f;
    font-size: 1.5rem;
    padding: 0 10%;
  }
  @media screen and (max-width: 800px) {
     .slider__contents .slider__txt {
      font-size: 1.1rem;
    }
  }
  .slick-dots li button:before {
    font-size: 8px;
   }
  /* .carousel-indicators{
    visibility: hidden
  } */
  
`;

export default Wrapper;
