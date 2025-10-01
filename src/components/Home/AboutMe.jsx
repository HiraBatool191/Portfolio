import React from "react";
import Skill from "../../assets/skills.png";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

const AboutMe = ({isBtn,isHead}) => {
  const navigate = useNavigate();
  return (
    <>
      
        <div className="container">
          {isHead && <div className="flex items-center gap-3 justify-start mb-5">
            <h3 className="lg:text-3xl text-2xl font-medium">
              {" "}
              <span className="text-purple-500 mr-1">#</span>about-me
            </h3>
            <div className="lg:block hidden w-100 h-[0.5px] bg-purple-400"></div>
          </div>}
          <div className="flex lg:flex-nowrap flex-wrap items-center gap-5">
            <div className="lg:flex-1">
              <div className="md:space-y-3.5 lg:text-base text-sm space-y-2 max-w-[500px] mb-4 lg:mb-8">
                <p>
                  I'm a passionate Frontend Developer who transforms ideas into
                  interactive digital experiences.
                </p>
                <p>
                  With expertise in React.js, Tailwind CSS, and modern
                  JavaScript, I build clean, responsive, and user-friendly
                  websites.
                </p>
                <p>
                  I love blending creativity with clean code to craft designs
                  that are both functional and visually appealing.
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
              {isBtn && <Button
                suffixImg={<IoIosArrowRoundForward size={26} />}
                onClick={() => navigate("/about-me")}
              >
                Read More
              </Button>}
            </div>
            <div className="lg:flex-1">
              <img src={Skill} alt="" className="" />
            </div>
          </div>
        </div>
    </>
  );
};

export default AboutMe;
