import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Fixed = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/hira-batool-9613a7258",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/HiraBatool191",
      label: "GitHub",
    },
    {
      icon: <MdEmail size={24} />,
      url: "mailto:batool.hira2020@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="w-px mx-auto h-46 bg-black/80"></div>
      {socialLinks.map((item, index) => (
        <Link
          key={index}
          to={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center text-primary/80 hover:text-purple-600 transition-all"
        >
          {item.icon}
          <span
            className="
              absolute left-8 
              opacity-0 group-hover:opacity-100 
              transform -translate-x-2 group-hover:translate-x-0
              transition-all duration-300 ease-out
              text-sm bg-purple-300 text-purple-700 px-2 py-1 rounded-md whitespace-nowrap
            "
          >
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Fixed;
