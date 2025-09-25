import React from "react";
import SkillsChart from "./SkillsChart";
import Skill from "../../assets/skills.png";

const Skills = () => {
  return (
    <div className="relative text-white lg:py-10 py-5 px-2.5 md:px-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <circle className="animate-float-1" cx="80%" cy="20%" r="80" fill="#a855f7" opacity="0.08"/>
        <circle className="animate-float-2" cx="30%" cy="50%" r="60" fill="#6b21a8" opacity="0.06"/>
        <rect className="animate-float-3" x="60%" y="10%" width="120" height="120" fill="#d8b4fe" opacity="0.05"/>
        <polygon className="animate-float-4" points="80%,30% 85%,45% 75%,45%" fill="#a855f7" opacity="0.04"/>
        
        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={i}
            className={`animate-float-${(i % 4) + 1}`}
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r={Math.random() * 5 + 2}
            fill="#d8b4fe"
            opacity={0.03 + Math.random() * 0.05}
          />
        ))}
      </svg>

      <div className="relative z-10 container">
        <div className="flex items-center gap-3 justify-start mb-8">
          <h3 className="text-3xl font-medium">
            <span className="text-purple-500 mr-1">#</span>skills
          </h3>
          <div className="lg:block hidden w-100 h-[0.5px] bg-purple-400"></div>
        </div>
        <div className="flex lg:flex-nowrap flex-wrap items-center gap-5">
          <div className="lg:flex-1">
            <img src={Skill} alt="Skills" className="" />
          </div>
          <div className="lg:flex-1">
            <SkillsChart />
          </div>
        </div>
      </div>

      <style>
        {`
          /* Big drifting animations */
          @keyframes float1 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(20px, -15px); }
            50% { transform: translate(-10px, 20px); }
            75% { transform: translate(15px, 10px); }
            100% { transform: translate(0, 0); }
          }

          @keyframes float2 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(-15px, 20px); }
            50% { transform: translate(10px, -25px); }
            75% { transform: translate(-20px, 15px); }
            100% { transform: translate(0, 0); }
          }

          @keyframes float3 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(25px, 10px); }
            50% { transform: translate(-20px, -15px); }
            75% { transform: translate(10px, 20px); }
            100% { transform: translate(0, 0); }
          }

          @keyframes float4 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(-20px, -10px); }
            50% { transform: translate(15px, 20px); }
            75% { transform: translate(-10px, -15px); }
            100% { transform: translate(0, 0); }
          }

          /* Apply animations with different durations */
          .animate-float-1 { animation: float1 25s ease-in-out infinite; }
          .animate-float-2 { animation: float2 30s ease-in-out infinite; }
          .animate-float-3 { animation: float3 28s ease-in-out infinite; }
          .animate-float-4 { animation: float4 32s ease-in-out infinite; }
        `}
      </style>
    </div>
  );
};

export default Skills;
