import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import Button from "../Button/Button";
import Particles from "react-tsparticles";
const Banner = () => {
  return (
    <div className="md:pt-50 md:pb-10 pt-30 pb-5 px-2.5 min-h-screen md:px-0 animated-bg lg:rounded-b-[100px] lg:rounded-bl-[100px] rounded-b-[30px] rounded-bl-[30px]">
      <Particles  
        className="absolute top-0 left-0 w-full h-full -z-10"
        options={{
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100 } }
          },
          particles: {
            color: { value: "#a855f7" },
            links: { enable: true, color: "#a855f7", distance: 120, opacity: 0.3 },
            collisions: { enable: false },
            move: { enable: true, speed: 1 },
            number: { value: 40 },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } }
          },
          detectRetina: true
        }}
      />
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
