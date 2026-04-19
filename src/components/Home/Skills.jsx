import React from "react";
import SkillsChart from "./SkillsChart";
import Skill from "../../assets/skills.png";
import skillsbg from "../../assets/skills-bg.avif";

const Skills = () => {
  return (
    <div className="relative text-white md:px-0 overflow-hidden bg-cover bg-no-repeat bg-right-top md:bg-center">
      <div className="container">
        <div className="flex items-center gap-3 justify-start mb-8">
          <h3 className="lg:text-3xl text-2xl font-medium">
            <span className="text-cyan-500 mr-1">#</span>skills
          </h3>
          <div className="lg:block hidden w-full h-[0.5px] bg-cyan-400"></div>
        </div>
        <div className="flex lg:flex-nowrap flex-wrap items-center gap-5">
          <div className="lg:w-[50%]">
            <SkillsChart />
          </div>
          <div className="lg:flex-1 w-full bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
         
            <div className=" mb-3">
              
              <h3 className="text-lg font-semibold text-cyan-400">
                Real-World Projects
              </h3>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Alongside these technical skills, I have completed several
              real-world projects that showcase my ability to design, develop,
              and implement responsive and user-friendly web applications.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">✔</span>
                <span>Responsive Web Design</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">✔</span>
                <span>Modern UI with Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">✔</span>
                <span>Interactive React Components</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
