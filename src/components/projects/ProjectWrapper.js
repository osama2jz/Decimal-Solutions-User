import styled from "styled-components";

const Wrapper = styled.section`
.projects-container .heading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .projects-container .heading .project-titles {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
  }
  .projects-container .heading .project-titles .title {
    color: #a4238c;
    font-size: 1.6rem;
  }
  @media all and (max-width: 1360px) {
    .projects-container .heading .project-titles .title {
      font-size: 1.4rem;
    }
  }
  @media all and (max-width: 800px) {
    .projects-container .heading .project-titles .title {
      font-size: 1.2rem;
    }
  }
  @media all and (max-width: 600px) {
    .projects-container .heading .project-titles .title {
      font-size: 1rem;
    }
  }
  @media all and (max-width: 420px) {
    .projects-container .heading .project-titles .title {
      font-size: 0.8rem;
    }
  }
  .projects-container .heading .project-titles h2 {
    color: #3f3f3f;
    font-weight: 600;
    font-size: 2.4rem;
  }
  @media all and (max-width: 1360px) {
    .projects-container .heading .project-titles h2 {
      font-size: 2.2rem;
    }
  }
  @media all and (max-width: 800px) {
    .projects-container .heading .project-titles h2 {
      font-size: 1.8rem;
    }
  }
  @media all and (max-width: 600px) {
    .projects-container .heading .project-titles h2 {
      font-size: 1.5rem;
    }
  }
  @media all and (max-width: 420px) {
    .projects-container .heading .project-titles h2 {
      font-size: 1.2rem;
    }
  }
  .projects-container .project-tags {
    padding: 0 1rem;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1000px) {
    .projects-container .project-tags {
      gap: 1rem;
    }
  }
  .projects-container .project-tags button {
    background-color: white;
    font-size: 12px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 8px 30px;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    color: #666666;
    font-weight: 400;
    transition: all 0.5s ease;
  }
  @media all and (max-width: 1600px) {
    .projects-container .project-tags button {
      font-size: 1rem;
      padding: 8px 25px;
    }
  }
  @media all and (max-width: 1200px) {
    .projects-container .project-tags button {
      font-size: 1rem;
      padding: 8px 20px;
    }
  }
  @media all and (max-width: 800px) {
    .projects-container .project-tags button {
      font-size: 0.8rem;
      padding: 8px 17px;
    }
  }
  @media all and (max-width: 600px) {
    .projects-container .project-tags button {
      font-size: 0.7rem;
      padding: 8px 13px;
    }
  }
  @media all and (max-width: 460px) {
    .projects-container .project-tags button {
      font-size: 0.6rem;
      padding: 8px 10px;
    }
  }
  .projects-container .project-tags button:first-of-type {
    padding: 8px 40px;
  }
  .projects-container .project-tags button:hover {
    color: white !important;
    background-color: #b071b0;
    border: 1px solid #a4238c;
  }
  .projects-container .project-view-button {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    transition: filter 0.3s ease;
  }
  .projects-container .project-view-button:hover {
    filter: brightness(0.9);
  }
  .projects-container .project-view-button a {
    color: white;
    padding: 1.5rem 8rem;
    background-color: #a4238c;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    cursor: pointer;
  }
  @media screen and (max-width: 1500px) {
    .projects-container .project-view-button a {
      padding: 1.325rem 6.625rem;
      font-size: 1.275rem;
    }
  }
  @media screen and (max-width: 1200px) {
    .projects-container .project-view-button a {
      padding: 1.15rem 5.75rem;
      font-size: 1.15rem;
    }
  }
  @media screen and (max-width: 800px) {
    .projects-container .project-view-button a {
      padding: 1rem 5rem;
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 500px) {
    .projects-container .project-view-button a {
      padding: 0.8rem 4rem;
      font-size: 0.9rem;
    }
  }





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
    border: 1px solid transparent;
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
    width: 100%;
  height: 100%;
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
  @media screen and (max-width: 377px) {
  .hover__overlay p {
    font-size: 0.4rem;
    text-align: center;
    color: white;
  }
  .hover__overlay .link__icon {
    margin-top: 0.5rem;
  }
  }
  @media screen and (max-width: 400px) {
    .hover__overlay p {
    font-size: 1rem;
    text-align: center;
    color: white;
  }
  }
 
 
 

`;

export default Wrapper;
