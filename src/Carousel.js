import React from "react";
import Wrapper from "./CarouselWrapper";

function Carousel() {
  return (
    <Wrapper>
      <div class="carousel__slide">
        <div class="card">
          <div class="card__inner">
            <div class="numbering-inside">
              <p class="text">01</p>
            </div>
            <div class="card__image">
              <img src="./assets/svgs/Web Development.svg" />
            </div>
            <h3>Website Development</h3>
          </div>
          <div class="hover__overlay">
            <p>
              We are offering a huge variety of services from web development to
              web hosting.
            </p>
            <a href="#" class="link__icon">
              <img src="assets/icons/link-outlined.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Carousel;
