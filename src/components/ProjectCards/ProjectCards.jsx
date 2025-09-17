import React from "react";
import Button from "../Button/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiSettings } from "react-icons/fi";

const ProjectCards = ({ projectcard }) => {
  return (
    <>
      {projectcard.map((items, i) => (
        <div key={i} className="border border-white/70">
          <img
            src={items.img}
            alt="projects"
            className="h-55 w-full object-cover"
          />
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
                onClick={() => items.onTechClick(items)}
                className="border-white/50"
                suffixImg={<FiSettings />}
              >
                Tech Stack
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCards;
