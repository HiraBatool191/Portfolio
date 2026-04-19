import React, { useState } from "react";
import Button from "../Button/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import Model from "../Model/Model";

const ProjectCards = ({ projectcard, isImg }) => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      {projectcard.map((item, i) => (
        <div
          key={i}
          className="group bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
        >
          {isImg && item.img && (
            <img
              src={item.img}
              alt={item.title}
              className="md:h-55 h-42 w-full object-cover cursor-pointer transition-transform duration-300  group-hover:scale-110"
              onClick={() => setActiveCard(item)}
            />
          )}

          <div className="border-y border-white/10 px-2 pb-2 pt-3.5 text-white/70 text-sm">
            {item.frame}
          </div>

          <div className="px-4 py-4">
            <h3 className="lg:text-xl text-base text-white capitalize mb-1.5 group-hover:text-cyan-400 transition">
              {item.title}
            </h3>

            <p className="mb-3 line-clamp-2 text-white/70 text-sm">
              {item.detail}
            </p>

            <div className="flex items-center gap-2.5">
              {item.onLiveClick && (
                <Button
                  onClick={() =>
                    window.open(item.onLiveClick, "_blank", "noopener,noreferrer")
                  }
                  suffixImg={
                    <IoIosArrowRoundForward className="w-5 h-5 md:w-6 md:h-6 animate-bounce-x" />
                  }
                >
                  Live
                </Button>
              )}

              <Button
                onClick={() => setActiveCard(item)}
                className="!border-white/30 hover:bg-transparent"
                suffixImg={<FiSettings />}
              >
                Tech Stack
              </Button>
            </div>
          </div>
        </div>
      ))}

      {activeCard && (
        <Model setIsOpen={() => setActiveCard(null)}>
          {isImg && activeCard.img && (
            <img
              src={activeCard.img}
              alt={activeCard.title}
              className="mb-5 rounded-lg"
            />
          )}

          <h3 className="text-xl font-bold text-black capitalize mb-1.5">
            {activeCard.title}
          </h3>

          <p className="text-black/70 mb-5">
            {activeCard.detail}
          </p>

          {activeCard.onLiveClick && (
            <Button
              onClick={() =>
                window.open(activeCard.onLiveClick, "_blank", "noopener,noreferrer")
              }
              suffixImg={
                <IoIosArrowRoundForward size={26} className="animate-bounce-x" />
              }
            >
              Live
            </Button>
          )}
        </Model>
      )}
    </>
  );
};

export default ProjectCards;