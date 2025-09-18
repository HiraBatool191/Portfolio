import React from "react";
import SkillsChart from "./SkillsChart";
import Skill from "../../assets/skills.png";

const Skills = () => {
  return (
    <>
      <div className="text-white lg:py-10 py-5 px-2.5 md:px-0">
        <div className="container">
          <div className="flex items-center gap-3 justify-start mb-8">
            <h3 className="text-3xl font-medium">
              {" "}
              <span className="text-purple-500 mr-1">#</span>skills
            </h3>
            <div className="lg:block hidden w-100 h-[0.5px] bg-purple-400"></div>
          </div>
          <div className="flex lg:flex-nowrap flex-wrap items-center gap-5">
            <div className="lg:flex-1">
              <img src={Skill} alt="" className="" />
            </div>
            <div className="lg:flex-1">
              <SkillsChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
