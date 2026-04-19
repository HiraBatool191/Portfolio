import React from "react";

const SkillsCard = ({ skills }) => {
  return (
    <>
      {skills.map((item, i) => (
        <div
          key={i}
          className="group flex flex-col items-center justify-center p-4 rounded-xl border border-white/10 bg-gray-900/30 backdrop-blur-md 
          transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30"
        >
          <img
            src={item.icon}
            alt={item.title}
            className="w-12 h-12 object-contain mb-2"
          />
          <p className="text-sm group-hover:font-bold transition-all text-white/80">{item.title}</p>
        </div>
      ))}
    </>
  );
};

export default SkillsCard;