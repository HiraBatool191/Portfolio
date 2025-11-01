import React from "react";
import Skill from "../../assets/about.avif";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

const AboutMe = ({ isBtn, isHead }) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-purple-600/40 to-pink-500/30 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] bg-gradient-to-tr from-purple-400/30 to-cyan-400/20 rounded-full blur-3xl"></div>

        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px] opacity-50"></div>
      </div>

      <div className="container">
        {isHead && (
          <div className="flex items-center gap-3 justify-start mb-5">
            <h3 className="lg:text-3xl text-2xl font-medium">
              <span className="text-purple-500 mr-1">#</span>about-me
            </h3>
            <div className="lg:block hidden w-100 h-[0.5px] bg-purple-400"></div>
          </div>
        )}

        <div className="flex lg:flex-nowrap flex-wrap items-center gap-5">
          <div className="lg:flex-1">
            <div className="md:space-y-3.5 lg:text-base text-sm space-y-2 max-w-[500px] mb-4 lg:mb-8 text-gray-300">
              <p>
                I'm a passionate Frontend Developer who transforms ideas into
                interactive digital experiences.
              </p>
              <p>
                With expertise in React.js, Tailwind CSS, and modern JavaScript,
                I build clean, responsive, and user-friendly websites.
              </p>
              <p>
                I love blending creativity with clean code to craft designs that
                are both functional and visually appealing.
              </p>
              <p>
                Every project I work on is focused on delivering seamless
                performance and engaging user experiences.
              </p>
              <p>
                For me, frontend development is not just coding—it’s bringing
                creativity and technology together.
              </p>
            </div>
            {isBtn && (
              <Button
                suffixImg={<IoIosArrowRoundForward size={26} />}
                onClick={() => navigate("/about-me")}
              >
                Read More
              </Button>
            )}
          </div>

          <div className="lg:flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-500/20 blur-2xl rounded-full"></div>
              <img
                src={Skill}
                alt="Skill"
                className="relative z-10 max-w-full drop-shadow-[0_0_20px_rgba(147,51,234,0.3)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
