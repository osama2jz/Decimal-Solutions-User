import React from "react";
import Wrapper from "./AchievementWrapper";

import { ReactComponent as GroupIcon } from "../../../assets/icons/Group.svg";
import { ReactComponent as PatternIcon } from "../../../assets/icons/Group (1).svg";
import { ReactComponent as PeopleIcon } from "../../../assets/icons/Group (2).svg";
import { ReactComponent as LaptopIcon } from "../../../assets/icons/Group (3).svg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Achievement() {
  const [count, setCount] = React.useState(false);
  return (
    <ScrollTrigger onEnter={()=>setCount(true)} onExit={()=>setCount(false)}>
    <Wrapper>
      {/* <!-- Achievements section started--> */}
      <div class="achievements">
        <div class="overlay"></div>
        <div class="content">
          <div class="heading">
            <div class="achievements-title">
              <span class="title"> &lt;&nbsp;Some Facts&nbsp;&gt; </span>
              <h2 className="font-bold">Number of Achievements</h2>
            </div>
          </div>
          <div class="achievements-boxes">
            <div class="yearsOps center-achi">
              <div>
                <GroupIcon />
              </div>
              <h1>08</h1>
              <span>Years of operation</span>
            </div>
            <div class="c-projects center-achi">
              <div>
                <PatternIcon />
              </div>
              {/* <h1>112</h1> */}
              <h1>
                {count && <CountUp start={0} end={112} duration={3} />}
              </h1>
              <span>Completed Projects</span>
            </div>
            <div class="clients center-achi">
              <div>
                <PeopleIcon />
              </div>
              <h1>57</h1>
              <span>Loyal Clients</span>
            </div>
            <div class="projects center-achi">
              <div>
                <LaptopIcon />
              </div>
              <h1>07</h1>
              <span>New Projects</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Achievements section ended --> */}
    </Wrapper>
    </ScrollTrigger>
  );
}

export default Achievement;
