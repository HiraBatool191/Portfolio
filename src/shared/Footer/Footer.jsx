import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="relative py-8 md:px-0 px-2.5">
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-[length:200%_200%] animated-bg"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-wrap md:gap-5 gap-3 items-start justify-between pb-5">
          <div>
            <div
              className="flex items-center text-xl font-bold cursor-pointer mb-2"
              onClick={() => navigate("/")}
            >
              <span className="text-purple-500">&lt;</span>
              <span className="mx-1 text-purple-500">Hira</span>
              <span className="text-purple-500">/&gt;</span>
            </div>
            <p className="text-white/80 lg:text-base text-sm">
              Let's build something amazing together.
            </p>
          </div>

          <div>
            <h3 className="lg:text-2xl text-xl text-white font-bold mb-2">Media</h3>
            <div className="flex gap-4">
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  target="_blank"
                  className="text-white/50 hover:text-white transition-all hover:scale-110"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="text-white text-center lg:text-base text-xs">
            © 2025 Hira. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
