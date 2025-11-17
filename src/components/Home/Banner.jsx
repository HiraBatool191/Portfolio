import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div
      className="
        relative min-h-screen md:pt-50 md:pb-10 pt-30 pb-5 px-2.5 md:px-0
        lg:rounded-b-[100px] lg:rounded-bl-[100px] 
        rounded-b-[30px] rounded-bl-[30px]
        overflow-hidden
      "
    >

      {/* ===========================
          PREMIUM DEVELOPER BACKGROUND  
         =========================== */}

      {/* Soft main gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-blue-50 -z-10"></div>

      {/* Glow Blobs (Animated) */}
      <div className="absolute w-[300px] h-[300px] bg-purple-300/40 blur-3xl rounded-full top-10 left-10 animate-[float1_6s_ease-in-out_infinite] -z-10"></div>
      <div className="absolute w-[350px] h-[350px] bg-blue-300/40 blur-3xl rounded-full bottom-10 right-10 animate-[float2_7s_ease-in-out_infinite] -z-10"></div>

      {/* Subtle white shine diagonal */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent rotate-12 -z-10 pointer-events-none"></div>

      {/* Noise Texture Overlay (modern UI trick) */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] -z-10 mix-blend-overlay"></div>

      {/* =========================== */}
      {/* Your Original Content Below */}
      {/* =========================== */}

      <div className="container text-black mx-auto flex flex-col justify-center items-center gap-1 text-center">

        {/* Desktop Heading */}
        <h1 className="hidden lg:block text-3xl md:text-5xl font-bold mb-4">
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

        {/* Mobile Heading */}
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

        <p className="opacity-80">
          Where creativity meets clean code & modern design.
        </p>

        <div className="mb-5 relative border border-black/30 w-fit p-5 mx-auto mt-5 md:mt-10 font-bold bg-white/30 backdrop-blur-md rounded-xl shadow-lg">
          <RiDoubleQuotesL className="absolute -top-3 left-3 text-2xl text-purple-400" />
          <p className="pl-2 text-sm lg:text-lg">
            Crafting modern web magic.
          </p>
        </div>

      </div>

      {/* Floating animations */}
      <style>
        {`
          @keyframes float1 {
            0%,100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-30px) translateX(20px); }
          }
          @keyframes float2 {
            0%,100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(25px) translateX(-20px); }
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
