import { div } from "framer-motion/client";
import React from "react";

const SkillsCard = ({ skills }) => {
  return (
    <>
      {skills.map((items, i) => (
        <div
          key={i}
          className="flex items-center justify-center bg-black/70 hover:border-purple-200 hover:bg-black border border-white/40 p-3 h-[130px] hover:scale-105 transition-all"
        >
          <img
            src={items.icon}
            alt="skills"
            className="h-25 w-25 object-contain"
          />
        </div>
      ))}
    </>
  );
};

export default SkillsCard;
