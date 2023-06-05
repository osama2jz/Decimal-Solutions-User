import styled from "styled-components";

const Wrapper = styled.section`
h2{
    font-size: x-large
  }
  .working-process{
    margin-top: 9rem;
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
    margin-left:120px
  }
  .description-container {
    background-color: white;
    position: absolute;
    padding: 18px;
    border-radius: 15px;
    border: 1px solid rgb(0,0,0,0.2);
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
    top: 5%;
    right: 5%;
  }
  .description-2 {
    top: 25%;
    right: 1.3%;
  }
  .description-3 {
    top: 46%;
    right: 1.7%;
  }
  .description-4 {
    /* bottom: 0%; */
    right: 6%;
    top: 67%
  }
  @media screen and (max-width: 1200px) {
     .img-container {
      visibility: hidden;
    }
  }
  @media screen and (max-width: 1200px) {
     .description-1 {
      top: 0%;
      right: 3%
      /* bottom: 4% */
    }
    .description-container {
    background-color: white;
    position: absolute;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.06);
    width: 90%;
    font-size: 1em;
    /* margin-bottom: 5rem; */
  }
  .description-2 {
      top: 35%;
      right: 3%
      
    }
    .description-3 {
      top: 70%;
      right: 3%
      
    }
    .description-4 {
      top: 105%;
      right: 3%
      
    }
  }
  @media screen and (max-width: 1200px) {
     .img-container {
      visibility: hidden;
    }
  }

  @media screen and (max-width: 500px) {
     .description-1 {
      top: 0%;
      right: 1%
      /* bottom: 4% */
    }
    .description-container {
    background-color: white;
    position: absolute;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.06);
    width: 90%;
    font-size: 1em;
    /* margin-bottom: 5rem; */
  }
  .description-2 {
      top: 100%;
      right: 1%
      
    }
    .description-3 {
      top: 200%;
      right: 1%
      
    }
    .description-4 {
      top: 300%;
      right: 1%
      
    }
  }
  
  @media screen and (max-width: 460px) {
     .description-1 {
      top: 0%;
      right: 1%
      /* bottom: 4% */
    }
    .description-container {
    background-color: white;
    position: absolute;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.06);
    width: 90%;
    font-size: 1em;
    /* margin-bottom: 5rem; */
  }
  .description-2 {
      top: 120%;
      right: 1%
      
    }
    .description-3 {
      top: 235%;
      right: 1%
      
    }
    .description-4 {
      top: 350%;
      right: 1%
      
    }
  }
  
  @media screen and (max-width: 425px) {
     .description-1 {
      top: 0%;
      right: 1%
      /* bottom: 4% */
    }
    .description-container {
    background-color: white;
    position: absolute;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.06);
    width: 90%;
    font-size: 1em;
    /* margin-bottom: 5rem; */
  }
  .description-2 {
      top: 120%;
      right: 1%
      
    }
    .description-3 {
      top: 255%;
      right: 1%
      
    }
    .description-4 {
      top: 390%;
      right: 1%
      
    }
  }
  @media screen and (max-width: 370px) {
     .description-1 {
      top: 0%;
      right: 1%
      /* bottom: 4% */
    }
    .description-container {
    background-color: white;
    position: absolute;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.06);
    width: 90%;
    font-size: 1em;
    /* margin-bottom: 5rem; */
  }
  .description-2 {
      top: 140%;
      right: 1%
      
    }
    .description-3 {
      top: 300%;
      right: 1%
      
    }
    .description-4 {
      top: 435%;
      right: 1%
      
    }
  }
  
  @media screen and (max-width: 365px) {
     .description-1 {
      top: 0%;
      right: 1%
      /* bottom: 4% */
    }
    .description-container {
    background-color: white;
    position: absolute;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.06);
    width: 90%;
    font-size: 1em;
    /* margin-bottom: 5rem; */
  }
  .description-2 {
      top: 160%;
      right: 1%
      
    }
    .description-3 {
      top: 325%;
      right: 1%
      
    }
    .description-4 {
      top: 470%;
      right: 1%
      
    }
  }
  
  @media screen and (max-width: 334px) {
     .description-1 {
      top: 0%;
      right: 1%
      /* bottom: 4% */
    }
    .description-container {
    background-color: white;
    position: absolute;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.06);
    width: 90%;
    font-size: 1em;
    /* margin-bottom: 5rem; */
  }
  .description-2 {
      top: 180%;
      right: 1%
      
    }
    .description-3 {
      top: 420%;
      right: 1%
      
    }
    .description-4 {
      top: 620%;
      right: 1%
      
    }
  }
  
  
`;

export default Wrapper;
