import React from "react";
import SkillsChart from "./SkillsChart";
import Skill from "../../assets/skills.png";
import skillsbg from "../../assets/skills-bg.jpg"

const Skills = () => {
  return (
    <div className="relative text-white lg:py-20 py-10 px-2.5 md:px-0 overflow-hidden bg-cover bg-no-repeat bg-right-top md:bg-center"
    style={{ backgroundImage: `url(${skillsbg})` }}>
      

      <div className="relative z-10 container">
        <div className="flex items-center gap-3 justify-start mb-8">
          <h3 className="lg:text-3xl text-2xl font-medium">
            <span className="text-purple-500 mr-1">#</span>skills
          </h3>
          <div className="lg:block hidden w-100 h-[0.5px] bg-purple-400"></div>
        </div>
        <div className="flex lg:flex-nowrap flex-wrap items-center gap-5">
          {/* <div className="lg:flex-1">
            <img src={Skill} alt="Skills" className="" />
          </div> */}
          <div className="lg:w-[50%]">
            <SkillsChart />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Skills;
