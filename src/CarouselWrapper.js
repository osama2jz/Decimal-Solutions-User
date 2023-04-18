import styled from "styled-components";

const Wrapper = styled.section`
  .carousel__slide:hover .hover__overlay {
    visibility: visible !important;
    opacity: 0.9 !important;
  }
  @media screen and (min-width: 1180px) {
     .carousel__slide {
      min-width: 33.33%;
      scroll-snap-align: center;
      position: relative;
    }
  }
  @media screen and (max-width: 1180px) {
    .carousel__slide {
      min-width: 50%;
      scroll-snap-align: left;
      position: relative;
    }
  }
  @media screen and (max-width: 800px) {
    .carousel__slide {
      min-width: 100%;
    }
  }
   .carousel__slide .card {
    width: 100%;
    aspect-ratio: 3/2;
  }
   .carousel__slide .card .card__inner {
    box-shadow: #b071b0 0px 0px 0px 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
    flex-direction: column;
    row-gap: 0.5rem;
    height: 100%;
    border-radius: 15px;
    background-color: #fff;
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }
   .carousel__slide .card .card__inner .card__image img {
    height: 120px;
    margin-bottom: 1rem;
  }
   .carousel__slide .card .card__inner h3 {
    font-size: 1.8rem;
    margin: 0;
    font-weight: 500;
    color: #3f3f3f;
  }
  .carousel__slide .card .card__inner .numbering-inside {
    position: absolute;
    font-size: 2.5rem;
    width: 120px;
    height: 120px;
    text-align: center;
    border-radius: 50%;
    display: grid;
    align-items: center;
    background-color: #a4238c;
    color: white;
    top: 0;
    left: 0;
    transform: translate(-20%, -20%);
  }
  .carousel__slide .card .card__inner .numbering-inside p.text {
    margin-left: 10px;
    margin-top: 10px;
  }
  .carousel__slide .card .hover__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0px;
    margin: 15px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #a4238c;
    padding: 3rem;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.3s linear, opacity 0.3s linear;
  }
   .carousel__slide .card .hover__overlay h3 {
    font-size: 2rem;
    color: white;
    text-transform: uppercase;
  }
   .carousel__slide .card .hover__overlay p {
    font-size: 1.2rem;
    text-align: center;
    color: white;
  }
   .carousel__slide .card .hover__overlay .link__icon {
    margin-top: 2rem;
  }


`;

export default Wrapper;


