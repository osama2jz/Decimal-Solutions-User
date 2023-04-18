import styled from "styled-components";

const Wrapper = styled.section`
margin-bottom: 5rem;
.our-tools{
  margin-left: 5rem;
}
.our-tools .heading {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 3rem;
    font-size: 1.8rem;
  }
  .our-tools .heading .tools-desc {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-right: 6rem;
  }
  @media all and (max-width: 822px) {
   .our-tools .heading .tools-desc {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;
      margin-right: 0;
      text-align: flex-start;
    }
  }
   .our-tools .heading .tools-desc span {
    color: #a4238c;
    font-size: 1.6rem;
  }
   .our-tools .heading .tools-desc h3 {
    color: #3f3f3f;
    font-weight: 600;
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
   .our-tools .heading .tools-desc p.description {
    font-size: 1.7rem;
    color: #666666;
  }
   .our-tools .container {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
   .our-tools .container .faders {
    width: 100%;
    position: absolute;
    height: 100%;
  }
   .our-tools .container .faders .left,
   .our-tools .container .faders .right {
    width: 15%;
    height: 100%;
    position: absolute;
    z-index: 200;
  }
   .our-tools .container .faders .left {
    background: linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
  }
   .our-tools .container .faders .right {
    right: 0;
    background: linear-gradient(to left, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
  }
   .our-tools .container .items {
    display: flex;
    align-items: center;
    width: fit-content;
    animation: carouselAnimFast 12s infinite alternate linear;
  }
  .carousel-indicators{
    visibility: hidden
  }
  /* .entry {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 372px;
  background: white;
  margin: 1em;
  padding: 1.5rem;
  border-radius: 10px;
  justify-content: center;
} */
.slick-track {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 1200px) {
     .our-tools{ 
      margin-top: 15rem;

     }
  }
  @media screen and (max-width: 500px) {
     .our-tools{ 
      margin-top: 55rem;

     }
  }
  @media screen and (max-width: 500px) {
     .our-tools{ 
      margin-top: 60rem;

     }
  }
  @media screen and (max-width: 425px) {
     .our-tools{ 
      margin-top: 65rem;

     }
  }
  @media screen and (max-width: 370px) {
     .our-tools{ 
      margin-top: 67rem;

     }
  }
  @media screen and (max-width: 365px) {
     .our-tools{ 
      margin-top: 70rem;

     }
  }
  @media screen and (max-width: 334px) {
     .our-tools{ 
      margin-top: 85rem;

     }
  }
  /* @media screen and (max-width: 500px) {
     .our-tools{ 
      margin-top: 85rem;

     }
  } */
`;

export default Wrapper;
