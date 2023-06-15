import React from "react";
import Image from "../../../assets/images/Group 69.png";
import Wrapper from "./WorkingProcessWrapper";

function WorkingProcess() {
  return (
    <Wrapper>
      {/* <!-- Working process section started --> */}
      <div className="working-process">
        <div className="heading">
          <div className="working-desc">
            <span className="title"> &lt;&nbsp;Why Choose Us&nbsp;&gt; </span>
            <h2 style={{fontSize: 'x-large'}} className="font-bold">Our Working process</h2>
            <p className="description" className="text-base mt-2">
              We ensure that all your digital needs are met at an affordable
              price and in promised time.
            </p>
          </div>
        </div>
        <div className="working-person" >
          <div className="img-container">
            <img
              src={Image}
              alt="Man pointing out in blank space with 4 points"
            />
          </div>
          <div className="description-container description-1">
            <h3>Product Analysis</h3>
            <p>
              We analyze your product on market trends and price value to
              observe its life expectancy in the market.
            </p>
          </div>
          <div className="description-container description-2">
            <h3>Wireframe or UI/UX Design</h3>
            <p>
              We suggest the solution or modifications to your product by
              employing UI/UX design to make it interactive and creative.
            </p>
          </div>
          <div className="description-container description-3">
            <h3>Product Development</h3>
            <p>
              We develop a high-quality software product according to your
              desire which compliments your business well.
            </p>
          </div>
          <div className="description-container description-4">
            <h3>Product Testing</h3>
            <p>
              Our team performs strict product testing to ensure reliability,
              quality, cost-effectiveness, and product life expectancy while
              reducing customers’ aftercare needs.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Working process section ended --> */}
    </Wrapper>
  );
}

export default WorkingProcess;
