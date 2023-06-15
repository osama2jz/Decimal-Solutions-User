import React from "react";
import Wrapper from "./CarouselWrapper";

function Carousel() {
  return (
    <Wrapper>
      <div className="carousel__slide">
        <div className="card">
          <div className="card__inner">
            <div className="numbering-inside">
              <p className="text">01</p>
            </div>
            <div className="card__image">
              <img src="./assets/svgs/Web Development.svg" />
            </div>
            <h3>Website Development</h3>
          </div>
          <div className="hover__overlay">
            <p>
              We are offering a huge variety of services from web development to
              web hosting.
            </p>
            <a href="#" className="link__icon">
              <img src="assets/icons/link-outlined.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Carousel;
