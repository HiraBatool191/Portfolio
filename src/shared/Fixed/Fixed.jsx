import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Fixed = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/hira-batool-9613a7258",
    },
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/HiraBatool191",
    },
    {
      icon: <MdEmail size={24} />,
      url: "mailto:batool.hira2020@gmail.com",
    },
  ];
  return (
    <>

      <div className="flex flex-col gap-3">
         <div className="w-px mx-auto h-46 bg-white/80"></div>
        {socialLinks.map((item, index) => (
          <Link
            key={index}
            to={item.url}
            target="_blank"
            className=" text-white/80 hover:text-white transition-all hover:scale-110"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Fixed;
