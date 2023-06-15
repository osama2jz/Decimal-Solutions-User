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
    <ScrollTrigger
      onEnter={() => setCount(true)}
      onExit={() => setCount(false)}
    >
      <Wrapper>
        {/* <!-- Achievements section started--> */}
        <div className="achievements">
          <div className="overlay"></div>
          <div className="content">
            <div className="heading">
              <div className="achievements-title">
                <span className="title"> &lt;&nbsp;Some Facts&nbsp;&gt; </span>
                <h2 className="font-bold">Number of Achievements</h2>
              </div>
            </div>
            <div className="achievements-boxes">
              <div className="yearsOps center-achi">
                <div>
                  <GroupIcon />
                </div>
                {count && (
                  <CountUp
                    start={0}
                    end={10}
                    duration={3}
                    style={{ fontSize: "60px", fontWeight: 1000 }}
                  />
                )}
                <span>Years of operation</span>
              </div>
              <div className="c-projects center-achi">
                <div>
                  <PatternIcon />
                </div>
                <h1>
                  {count && (
                    <CountUp
                      start={0}
                      end={112}
                      duration={3}
                      style={{ fontSize: "60px", fontWeight: 1000 }}
                    />
                  )}
                </h1>
                <span>Completed Projects</span>
              </div>
              <div className="clients center-achi">
                <div>
                  <PeopleIcon />
                </div>
                {count && (
                  <CountUp
                    start={0}
                    end={55}
                    duration={3}
                    style={{ fontSize: "60px", fontWeight: 1000 }}
                  />
                )}
                <span>Loyal Clients</span>
              </div>
              <div className="projects center-achi">
                <div>
                  <LaptopIcon />
                </div>
                {count && (
                  <CountUp
                    start={0}
                    end={7}
                    duration={3}
                    style={{ fontSize: "60px", fontWeight: 1000 }}
                  />
                )}
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
