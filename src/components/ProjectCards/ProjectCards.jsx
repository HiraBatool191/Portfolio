import React, { useState } from "react";
import Button from "../Button/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import Model from "../Model/Model";

const ProjectCards = ({ projectcard, isImg }) => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      {projectcard.map((items, i) => (
        <div
          key={i}
          className="text-white border border-white/70 hover:scale-103 transition-all"
        >
          {isImg && items.img && (
            <img
              src={items.img}
              alt="projects"
              className="h-55 w-full object-cover cursor-pointer"
              onClick={() => setActiveCard(items)}
            />
          )}
          <div className="border-y border-white/70 px-1.5 py-2">
            <p className="text-white/80">{items.frame}</p>
          </div>
          <div className="px-3 py-3.5">
            <h3 className="text-xl capitalize mb-2.5">{items.title}</h3>
            <p className="text-white/60 mb-3 line-clamp-2">{items.detail}</p>
            <div className="flex items-center gap-2.5">
              {items.onLiveClick && (
                <Button
                  onClick={() => window.open(items.onLiveClick, "_blank")}
                  suffixImg={
                    <IoIosArrowRoundForward
                      size={26}
                      className="animate-bounce-x"
                    />
                  }
                >
                  Live
                </Button>
              )}

              <Button
                onClick={() => setActiveCard(items)}
                className="border-white/50 hover:bg-transparent "
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
            <img src={activeCard.img} alt="project" className="mb-5" />
          )}

          <h3 className="text-xl font-bold text-black capitalize mb-1.5">
            {activeCard.title}
          </h3>
          <p className="text-black/60 mb-5">{activeCard.detail}</p>
          {activeCard.onLiveClick && (
            <Button
              className="!text-black"
              onClick={() => window.open(activeCard.onLiveClick, "_blank")}
              suffixImg={
                <IoIosArrowRoundForward
                  size={26}
                  className="animate-bounce-x"
                />
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
