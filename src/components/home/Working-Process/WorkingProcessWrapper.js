import styled from "styled-components";

const Wrapper = styled.section`
  h2 {
    font-size: x-large;
  }
  .working-process {
    margin-top: 9rem;
  }
  .working-person {
    padding-inline: 30px;
    // justify-content:center;
  }
  .heading {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .working-desc {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6rem;
  }
  .title {
    color: #a4238c;
    font-size: 1.6rem !important;
    width: 100%;
  }
  h3 {
    color: #3f3f3f;
    font-weight: 600;
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
  p.description {
    font-size: 1.7rem;
    color: #666666;
  }
  .working-person {
    position: relative;
  }
  img {
    width: 50%;
    margin-left: 120px;
  }
  .description-container {
    background-color: white;
    position: absolute;
    padding: 18px;
    border-radius: 15px;
    border: 1px solid rgb(0, 0, 0, 0.2);
    box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.06);
    width: 40%;
    font-size: 1.5em;
  }
  p {
    color: #3f3f3f;
  }
  h3 {
    font-size: 1.45rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
  }
  .description-1 {
    top: 10%;
    padding: 10px;
    right: 4%;
  }
  .description-2 {
    top: 30%;
    padding: 10px;
    right: 0.5%;
  }
  .description-3 {
    top: 50%;
    padding: 10px;
    right: 0.5%;
  }
  .description-4 {
    /* bottom: 0%; */
    right: 5%;
    padding: 10px;
    top: 70%;
  }
  @media screen and (max-width: 1300px) {
    .img-container {
      display: none;
    }
  }
  @media screen and (max-width: 1300px) {
    .description-1 {
      top: 0%;
      right: 5%;
      /* bottom: 4% */
    }
    .description-container {
      background-color: white;
      position: static;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.06);
      width: 100%;
      font-size: 1em;
      /* margin-bottom: 5rem; */
    }
    .description-2 {
      margin-top: 10px;
    }
    .description-3 {
      margin-top: 10px;
    }
    .description-4 {
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 1200px) {
    .img-container {
      display: none;
    }
  }
  @media screen and (max-width: 1200px) {
    .description-1 {
      margin-top: 10px;
    }
    .description-container {
      background-color: white;
      position: static;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.06);
      width: 100%;
      font-size: 1em;
      /* margin-bottom: 5rem; */
    }
    .description-2 {
      margin-top: 10px;
    }
    .description-3 {
      margin-top: 10px;
    }
    .description-4 {
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 1100px) {
    .img-container {
     display:none;
    }
  }
  @media screen and (max-width: 1100px) {
    .description-1 {
      margin-top: 10px;
    }
    .description-container {
      background-color: white;
      position: static;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.06);
      width: 100%;
      font-size: 1em;
      /* margin-bottom: 5rem; */
    }
    .description-2 {
      margin-top: 10px;
    }
    .description-3 {
      margin-top: 10px;
    }
    .description-4 {
      margin-top: 10px;
    }
  }
  // @media screen and (max-width: 1200px) {
  //    .img-container {
  //     display: none;
  //   }
  // }

  @media screen and (max-width: 500px) {
    .description-1 {
      margin-top: 10px;
    }
    .description-container {
      background-color: white;
      position: static;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.06);
      width: 100%;
      font-size: 1em;
      /* margin-bottom: 5rem; */
    }
    .description-2 {
      margin-top: 10px;
    }
    .description-3 {
      margin-top: 10px;
    }
    .description-4 {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 460px) {
    .description-1 {
      margin-top: 10px;
    }
    .description-container {
      background-color: white;
      position: static;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.06);
      width: 100%;
      font-size: 1em;
      /* margin-bottom: 5rem; */
    }
    .description-2 {
      margin-top: 10px;
    }
    .description-3 {
      margin-top: 10px;
    .description-4 {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 425px) {
    .description-1 {
      margin-top: 10px;
    }
    .description-container {
      background-color: white;
      position: static;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.06);
      width: 100%;
      font-size: 1em;
      /* margin-bottom: 5rem; */
    }
    .description-2 {
      margin-top: 10px;
    }
    .description-3 {
      margin-top: 10px;
    }
    .description-4 {
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 370px) {
    .description-1 {
      margin-top: 10px;
    }
    .description-container {
      background-color: white;
      position: static;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.06);
      width: 100%;
      font-size: 1em;
      /* margin-bottom: 5rem; */
    }
    .description-2 {
      margin-top: 10px;
    }
    .description-3 {
      top: 300%;
      right: 1%;
    }
    .description-4 {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 365px) {
    .description-1 {
      margin-top: 10px;
    }
    .description-container {
      background-color: white;
      position: static;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.06);
      width: 100%;
      font-size: 1em;
      /* margin-bottom: 5rem; */
    }
    .description-2 {
      margin-top: 10px;
    }
    .description-3 {
      margin-top: 10px;
    }
    .description-4 {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 334px) {
    .description-1 {
      margin-top: 10px;
    }
    .description-container {
      background-color: white;
      position: static;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.06);
      width: 100%;
      font-size: 1em;
      /* margin-bottom: 5rem; */
    }
    .description-2 {
      margin-top: 10px;
    }
    .description-3 {
      margin-top: 10px;
    }
    .description-4 {
      margin-top: 10px;
    }
  }
`;

export default Wrapper;
