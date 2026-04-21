import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div
      className="
      section top h-screen pt-30 pb-5 px-2.5 md:px-0 flex flex-col justify-center items-center"
    >
      <div className="container  mx-auto  gap-1 text-center">
        <h1 className="hidden lg:block text-3xl md:text-5xl font-bold mb-4">
          <span className="typewriter delay-0">
            I’m Hira — React developer passionate
          </span>
          <br />
          <span className="typewriter delay-1">
            about{" "}
            <span className="text-cyan-600">
              accessibility & responsive design.
            </span>
          </span>
        </h1>

        <h1 className="block lg:hidden text-2xl font-bold mb-4">
          <span className="typewriter delay-2">I’m Hira</span>
          <br />
          <span className="typewriter delay-3">React developer</span>
          <br />
          <span className="typewriter delay-4">passionate about</span>

          <br />
          <span className="typewriter delay-5 text-cyan-500">
            accessibility &
          </span>
          <br />
          <span className="typewriter delay-6 text-cyan-500">
            responsive design.
          </span>
        </h1>

        <p className="opacity-80">
          Where creativity meets clean code & modern design.
        </p>

        <div className="hover:shadow-lg transition-all hover:shadow-cyan-400/40 mb-5 relative border border-black/30 w-fit p-5 mx-auto mt-5 md:mt-10 font-bold bg-cyan-700 backdrop-blur-md rounded-xl shadow-lg">
          <RiDoubleQuotesL className="absolute -top-3 left-3 text-2xl text-cyan-600" />
          <p className="pl-2 text-sm lg:text-lg">Crafting modern web magic.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
