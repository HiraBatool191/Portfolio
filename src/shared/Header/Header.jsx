import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Headerdata } from "./Constant";
import { HiMenu, HiX } from "react-icons/hi";

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
    <header className="py-6 shadow-2xl text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center text-2xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="text-purple-500">&lt;</span>
            <span className="mx-1 text-purple-500">Hira</span>
            <span className="text-purple-500">/&gt;</span>
          </div>

          <div className="hidden md:flex items-center gap-5">
            {Headerdata.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                className={({ isActive }) =>
                  `text-[18px] cursor-pointer ${
                    isActive
                      ? "font-normal text-white"
                      : "font-normal text-white/80 hover:text-white transition-all"
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
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <HiMenu
                size={30}
                className="cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-gray-900 z-40 transform transition-transform duration-300 ${
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
