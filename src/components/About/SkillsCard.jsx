import { div } from "framer-motion/client";
import React from "react";

const SkillsCard = ({ skills }) => {
  return (
    <>
      {skills.map((items, i) => (
        <div
          key={i}
          className="group hover:font-semibold flex flex-col items-center justify-center hover:border-purple-300 hover:bg-gray-300 bg-gray-200 border border-white/40 p-3 hover:scale-105 transition-all"
        >
          <img
            src={items.icon}
            alt="skills"
            className="h-25 w-25 object-contain"
          />
          <h2 className="lg:text-base text-sm">{items.title}</h2>
        </div>
      ))}
    </>
  );
};

export default SkillsCard;
