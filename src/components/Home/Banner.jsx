import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import Button from "../Button/Button";
const Banner = () => {
  return (
    <div className="md:pt-20 md:pb-10 pt-10 pb-5 px-2.5 md:px-0">
      <div className="container mx-auto text-white text-center">
        <h1 className="hidden lg:block text-3xl md:text-5xl font-bold  mb-4">
          <span className="typewriter delay-0">
            I’m Hira — React developer passionate
          </span>
          <br />
          <span className="typewriter delay-1">
            about{" "}
            <span className="text-purple-500">
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
          <span className="typewriter delay-5 text-purple-500">
            accessibility &
          </span>
          <br />
          <span className="typewriter delay-6 text-purple-500">
            responsive design.
          </span>
        </h1>
        <p>Where creativity meets clean code & modern design.</p>
        <div className="mb-5 relative border border-white/50 w-fit p-5 mx-auto mt-5 md:mt-10 text-white font-bold">
          <RiDoubleQuotesL className="absolute -top-3 left-3 text-2xl text-purple-400" />

          <p className="pl-2">Crafting modern web magic.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
