import styled from "styled-components";
import test from "../../../assets/images/Achievements.jpg";

const Wrapper = styled.section`
  .achievements {
    background-image: url(${test});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding: 1.5rem 0;
  }
  .overlay {
    width: 100%;
    height: 100%;
    background-color: #a4238c;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.85;
    z-index: 1;
  }
  .content {
    position: relative;
    z-index: 5;
  }
  .heading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ,
  .achievements-title {
    display: flex;
    flex-direction: column;
    color: white;
  }
  ,
  .title {
    font-size: 1.6rem;
  }
  h3 {
    color: white;
    font-weight: 600;
    font-size: 2.4rem;
  }
  .achievements-boxes {
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 4rem;
  }
  .center-achi {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    flex-wrap: wrap;
    flex-basis: 20%;
    aspect-ratio: 1;
    transition: transform 0.3s ease-in-out;
    position: relative;
  }
  @media screen and (max-width: 1170px) {
    .center-achi {
      flex-basis: 40%;
    }
    .center-achi:nth-child(4) {
      margin-top: 1rem;
    }
  }
  @media screen and (max-width: 532px) {
    .center-achi {
      flex-basis: 45%;
    }
  }
  @media screen and (max-width: 480px) {
    .center-achi {
      flex-basis: 90%;
    }
    .center-achi:not(:first-child) {
      margin-top: 1rem;
    }
  }
  .center-achi img {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 1600px) {
    .center-achi img {
      width: 90px;
      height: 90px;
    }
  }
  @media screen and (max-width: 1360px) {
    img {
      width: 75px;
      height: 75px;
    }
  }
  @media screen and (max-width: 1170px) {
    img {
      width: 120px;
      height: 120px;
    }
  }
  @media screen and (max-width: 850px) {
    img {
      width: 100px;
      height: 100px;
    }
  }
  @media screen and (max-width: 700px) {
    img {
      width: 80px;
      height: 80px;
    }
  }
  @media screen and (max-width: 480px) {
    img {
      width: 120px;
      height: 120px;
    }
  }
  @media screen and (max-width: 380px) {
    img {
      width: 90px;
      height: 90px;
    }
  }
  h1 {
    font-size: 5rem;
  }
  @media screen and (max-width: 1600px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 1360px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 1170px) {
    h1 {
      font-size: 5rem;
    }
  }
  @media screen and (max-width: 850px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 700px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 380px) {
    h1 {
      font-size: 3rem;
    }
  }
  span {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1600px) {
    span {
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 1360px) {
    span {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 1170px) {
    .center-achi span {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 850px) {
    .center-achi span {
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 700px) {
    .center-achi span {
      font-size: 1.1rem;
    }
  }
  @media screen and (max-width: 480px) {
    .center-achi span {
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 380px) {
    .center-achi span {
      font-size: 1.1rem;
    }
  }
  .center-achi::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
        to bottom,
        white 40%,
        transparent 40%,
        transparent 60%,
        white 60%
      )
      no-repeat;
  }
  .center-achi::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
        to bottom,
        white 40%,
        transparent 40%,
        transparent 60%,
        white 60%
      )
      no-repeat;
  }
  .center-achi:hover {
    transform: translateY(-4px);
  }
`;

export default Wrapper;
