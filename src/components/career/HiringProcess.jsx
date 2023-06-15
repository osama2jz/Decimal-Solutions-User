import React from "react";
import join from "../../assets/images/join.svg";
import Group1 from "../../assets/images/Group1.svg";
import Group2 from "../../assets/images/Group2.svg";
import Group3 from "../../assets/images/Group3.svg";
import Group4 from "../../assets/images/Group4.svg";

const HiringProcess = () => {
  return (
    <div className="hiring-process-container">
      <div className="hiring-heading">
        <div className="hiring-title">
          <span className="hir-title"> &lt;&nbsp;Hiring Steps&nbsp;&gt; </span>
          <h2 className="text-3xl font-bold">Our Recruitment Process</h2>
        </div>
      </div>
      <div className="Hiring-Process-div">
        <img
          src={Group1}
          alt="Hiring Process"
          className="hiring-process-image"
        />
        <img
          src={Group2}
          alt="Hiring Process"
          className="hiring-process-image"
        />
        <img
          src={Group3}
          alt="Hiring Process"
          className="hiring-process-image"
        />
        <img
          src={Group4}
          alt="Hiring Process"
          className="hiring-process-image"
        />
        <img src={join} alt="Hiring Process" className="hiring-process-image" />
      </div>
    </div>
  );
};
export default HiringProcess;
