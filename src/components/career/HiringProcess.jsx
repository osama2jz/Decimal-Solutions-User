import React from 'react';
import join from '../../assets/images/join.svg';
import Group1 from '../../assets/images/Group1.svg';
import Group2 from '../../assets/images/Group2.svg';
import Group3 from '../../assets/images/Group3.svg';
import Group4 from '../../assets/images/Group4.svg';

const HiringProcess = () => {
    return(
        <div className="hiring-process-container">
            <div class="hiring-heading">
                <div class="hiring-title">
                  <span class="hir-title">
                    {" "}
                    &lt;&nbsp;Hiring Steps&nbsp;&gt;{" "}
                  </span>
                  <h2 className='text-3xl font-bold'>Our Recruitment Process</h2>
                </div>
              </div>
              <div className='Hiring-Process-div'>
                {/* <div> */}
                    <img src={Group1} alt="Hiring Process" className='hiring-process-image' />
                    {/* <h3>Resume Submission</h3> */}
                {/* </div>
                <div> */}
                    <img src={Group2} alt="Hiring Process" className='hiring-process-image'/>
                    {/* <h3>Telephonic Interview</h3> */}
                {/* </div>
                <div> */}
                    <img src={Group3} alt="Hiring Process"className='hiring-process-image' />
                    {/* <h3>Online Skill Assessment</h3> */}
                {/* </div>
                <div> */}
                    <img src={Group4} alt="Hiring Process"className='hiring-process-image' />
                    {/* <h3>Technical and Final Interview</h3> */}
                {/* </div>
              
                <div> */}
                    <img src={join} alt="Hiring Process" height={"150px"}/>
                    
                {/* </div> */}
              </div>
        </div>

    )
}
export default HiringProcess;