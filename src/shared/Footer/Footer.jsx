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
}

];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-white/50 py-8 md:px-0 px-2.5">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-5 items-start justify-between pb-5">
          <div>
            <div
              className="flex items-center text-xl font-bold cursor-pointer mb-2"
              onClick={() => navigate("/")}
            >
              <span className="text-purple-500">&lt;</span>
              <span className="mx-1 text-purple-500">Hira</span>
              <span className="text-purple-500">/&gt;</span>
            </div>
            <p className="text-white/80">
              Let's build something amazing together.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-white font-bold mb-2">Media</h3>
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
          <p className="text-white text-center">
            © 2025 Hira. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
