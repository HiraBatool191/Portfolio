import React from "react";
import AboutMe from "../Home/AboutMe";
import SkillsImgs from "./SkillsImgs";

const About = () => {
  return (
    <>
      <div className="text-primary relative overflow-hidden lg:pt-40 pt-30 lg:pb-10 pb-5 px-2.5 md:px-2.5">
        <div className="container">
          <div className="lg:mb-8 mb-5">
            <h3 className="lg:text-[32px] text-2xl mb-2">
              <span className="text-purple-500">/</span>about-me
            </h3>
            <p className="lg:text-base text-sm">Meet the Developer</p>
          </div>
          <AboutMe isBtn={false} />
        </div>
      </div>
      <SkillsImgs/>
    </>
  );
};

export default About;
