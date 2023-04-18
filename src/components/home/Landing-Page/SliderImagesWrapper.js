import styled from "styled-components";

const Wrapper = styled.section`
.img-slider-header {
    position: relative;
    width: 100%;
    height: 650px;
    background: #1d212b;
  }
  @media (max-width: 1360px) {
     .img-slider-header {
      height: 600px;
    }
  }
  @media (max-width: 1150px) {
     .img-slider-header {
      height: 550px;
    }
  }
  @media (max-width: 1000px) {
     .img-slider-header {
      height: 480px;
    }
  }
  @media (max-width: 820px) {
     .img-slider-header {
      height: 400px;
    }
  }
  @media (max-width: 600px) {
     .img-slider-header {
      height: 300px;
    }
  }
  @media (max-width: 500px) {
     .img-slider-header {
      height: 250px;
    }
  }
  @media (max-width: 420px) {
     .img-slider-header {
      height: 200px;
    }
  }
   .img-slider-header .slide {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path: circle(0% at 0 50%);
    overflow: hidden;
  }
   .img-slider-header .slide.active {
    clip-path: circle(150% at 0 50%);
    transition: 2s;
    transition-property: clip-path;
  }
   .img-slider-header .slide img {
    z-index: 1;
    width: 100%;
    height: 100% !important;
    border-radius: 5px;
    object-fit: cover;
    object-position: right;
  }
   .img-slider-header .slide .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 58%;
    height: 100%;
  }
  @media all and (max-width: 1600px) {
     .img-slider-header .slide .content {
      width: 65%;
    }
  }
  @media all and (max-width: 1200px) {
     .img-slider-header .slide .content {
      width: 70%;
    }
  }
  @media all and (max-width: 800px) {
     .img-slider-header .slide .content {
      width: 80%;
    }
  }
   .img-slider-header .slide .content .diagonals {
    transform: rotate(-32deg) translate(-25%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    text-align: right;
    white-space: nowrap;
  }
   .img-slider-header .slide .content .diagonals .diagonal.thick {
    width: 100%;
    height: 200%;
    background-color: #a4238c;
    opacity: 0.85;
    margin-right: 50px;
  }
  @media all and (max-width: 1600px) {
     .img-slider-header .slide .content .diagonals .diagonal.thick {
      margin-right: 40px;
    }
  }
  @media all and (max-width: 1350px) {
     .img-slider-header .slide .content .diagonals .diagonal.thick {
      margin-right: 30px;
    }
  }
  @media all and (max-width: 1000px) {
     .img-slider-header .slide .content .diagonals .diagonal.thick {
      margin-right: 20px;
    }
  }
   .img-slider-header .slide .content .diagonals .diagonal.thin {
    width: 40px;
    height: 200%;
    background-color: #a4238c;
    opacity: 0.85;
  }
   .img-slider-header .slide .content .text {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 5rem;
    text-transform: uppercase;
  }
  @media all and (max-width: 1350px) {
     .img-slider-header .slide .content .text {
      padding-left: 3rem;
    }
  }
  @media all and (max-width: 1000px) {
     .img-slider-header .slide .content .text {
      padding-left: 1rem;
    }
  }
   .img-slider-header .slide .content .text h1 {
    color: white;
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    line-height: 1.2;
  }
  @media all and (max-width: 1600px) {
     .img-slider-header .slide .content .text h1 {
      font-size: 3rem;
      margin-bottom: 2.5rem;
    }
  }
  @media all and (max-width: 1400px) {
     .img-slider-header .slide .content .text h1 {
      font-size: 2.5rem;
      margin-bottom: 2.2rem;
    }
  }
  @media all and (max-width: 1100px) {
     .img-slider-header .slide .content .text h1 {
      font-size: 2.2rem;
      margin-bottom: 2rem;
    }
  }
  @media all and (max-width: 800px) {
     .img-slider-header .slide .content .text h1 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      font-weight: 600;
    }
  }
  @media all and (max-width: 600px) {
     .img-slider-header .slide .content .text h1 {
      font-size: 1.3rem;
      margin-bottom: 1.2rem;
    }
  }
  @media all and (max-width: 450px) {
     .img-slider-header .slide .content .text h1 {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
  }
   .img-slider-header .slide .content .text .button__container a {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-left: 10px;
    background-color: white;
    color: #a4238c;
    padding: 1.5rem 3.5rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
  }
  @media all and (max-width: 1600px) {
     .img-slider-header .slide .content .text .button__container a {
      font-size: 1.3rem;
      gap: 1.8rem;
      padding: 1.2rem 3rem;
      border-radius: 0.8rem;
    }
  }
  @media all and (max-width: 1400px) {
     .img-slider-header .slide .content .text .button__container a {
      font-size: 1.15rem;
      gap: 1.5rem;
      padding: 1rem 2.5rem;
      border-radius: 0.6rem;
    }
  }
  @media all and (max-width: 1100px) {
     .img-slider-header .slide .content .text .button__container a {
      border-radius: 1.1rem;
      font-size: 1rem;
      gap: 1.2rem;
      padding: 0.8rem 2rem;
      border-radius: 0.4rem;
      margin-left: 5px;
    }
  }
  @media all and (max-width: 800px) {
     .img-slider-header .slide .content .text .button__container a {
      font-size: 1rem;
      gap: 1.1rem;
      padding: 0.55rem 1.8rem;
      border-radius: 0.35rem;
    }
  }
  @media all and (max-width: 600px) {
     .img-slider-header .slide .content .text .button__container a {
      font-size: 0.8rem;
      gap: 1rem;
      padding: 0.5rem 1.2rem;
      border-radius: 0.3em;
    }
  }
   .img-slider-header .slide .content .text .button__container a .img {
    width: 27px;
    height: 27px;
  }
  @media all and (max-width: 1600px) {
     .img-slider-header .slide .content .text .button__container a .img {
      width: 22px;
      height: 22px;
    }
  }
  @media all and (max-width: 1400px) {
     .img-slider-header .slide .content .text .button__container a .img {
      width: 19px;
      height: 19px;
    }
  }
  @media all and (max-width: 1200px) {
     .img-slider-header .slide .content .text .button__container a .img {
      width: 17px;
      height: 17px;
    }
  }
  @media all and (max-width: 800px) {
     .img-slider-header .slide .content .text .button__container a .img {
      width: 15px;
      height: 15px;
    }
  }
  @media all and (max-width: 600px) {
     .img-slider-header .slide .content .text .button__container a .img {
      width: 13px;
      height: 13px;
    }
  }
   .img-slider-header .navigation {
    z-index: 2;
    position: absolute;
    display: flex;
    bottom: 0;
    right: 1rem;
    bottom: 2rem;
  }
  @media all and (max-width: 1000px) {
     .img-slider-header .navigation {
      bottom: 1.5rem;
    }
  }
  @media all and (max-width: 820px) {
     .img-slider-header .navigation {
      bottom: 0.8rem;
    }
  }
   .img-slider-header .navigation .btn {
    background: white;
    border: 8px solid #a4238c;
    width: 30px;
    height: 30px;
    margin: 1rem;
    border-radius: 50%;
    cursor: pointer;
  }
   .img-slider-header .navigation .btn:not(.active) {
    opacity: 0.3;
  }
   .img-slider-header .navigation .btn.active {
    background: white;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  }
  @media all and (max-width: 1400px) {
     .img-slider-header .navigation .btn {
      margin: 0.8rem;
      width: 25px;
      height: 25px;
      border-width: 6px;
    }
  }
  @media all and (max-width: 1000px) {
     .img-slider-header .navigation .btn {
      margin: 0.6rem;
      width: 22px;
      height: 22px;
      border-width: 5px;
    }
  }
  @media all and (max-width: 820px) {
     .img-slider-header .navigation .btn {
      width: 18px;
      height: 18px;
      border-width: 4px;
    }
  }
  .slick-dots li button:before {
    font-size: 8px;
   }
 
`;

export default Wrapper;
