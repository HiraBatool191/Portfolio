import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Headerdata } from "./Constant";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion"; 

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="py-6 shadow-2xl text-white md:px-0 px-2.5 fixed w-full top-0 z-20 backdrop-blur-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
       
          <div
            className="group hover:scale-105 transition-all flex items-center text-2xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            <motion.span
              className="text-purple-500"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              &lt;
            </motion.span>

            <motion.span
              className="mx-1 text-purple-500"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hira
            </motion.span>

            <motion.span
              className="text-purple-500"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              /&gt;
            </motion.span>
          </div>

          <div className="hidden md:flex items-center gap-5">
            {Headerdata.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                className={({ isActive }) =>
                  `text-[18px] cursor-pointer text-black ${
                    isActive
                      ? "font-normal text-black"
                      : "font-normal text-black/80 hover:text-black transition-all"
                  }`
                }
              >
                <span className="text-purple-500 mr-1">#</span>
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden z-50">
            {menuOpen ? (
              <HiX
                size={30}
                className="cursor-pointer "
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <HiMenu
                size={30}
                className="cursor-pointer text-black/70"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full bg-gray-900 z-40 transform h-screen transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-20 gap-6 pl-6">
          {Headerdata.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-xl cursor-pointer ${
                  isActive
                    ? "font-bold text-purple-400"
                    : "font-normal text-white/80 hover:text-white transition-all"
                }`
              }
            >
              <span className="text-purple-500 mr-1">#</span>
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

