import React from "react";
import Button from "../Button/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProjectCards from "../ProjectCards/ProjectCards";
import departedNote from "../../assets/departedNote.png";
import superAdmin from "../../assets/superAdmin.png";
import lendAgain from "../../assets/lendAgain.png";

const Projects = () => {
  const projectcard = [
    {
      img: departedNote,
      frame: "react.js, Tailwind, TanStack Table",
      title: "DepartedNote",
      detail:
        "This Web Dashboard is a modern, responsive, and interactive platform built with React.js and Tailwind CSS.The dashboard provides a clean UI and seamless UX, designed to monitor key metrics, manage data, and present insights through reusable components.It demonstrates scalable front-end architecture and shows how efficiently a dashboard can be developed using a component-driven approach with React.",
      onLiveClick:
        "https://phpstack-1250693-5581655.cloudwaysapps.com/web-dashboard",
    },
    {
      img: superAdmin,
      frame: "react.js, Tailwind, Toast, TanStack Table",
      title: "Custom CRM",
      detail:
        "A dashboard with toast notifications, dynamic tables, and interactive graphs for real-time data insights.",
      onLiveClick:
        "https://phpstack-1250693-5637632.cloudwaysapps.com/super-admin/home",
    },
    {
      img: lendAgain,
      frame: "react.js, Tailwind, React Query, TanStack Table",
      title: "Lend Again",
      detail:
        "A complete platform featuring secure signup and login authentication with a seamless user experience. The system includes a modern dashboard where users can efficiently manage data, track key activities, and navigate with ease through a clean and structured interface.",
      onLiveClick: "https://phpstack-1250693-5693020.cloudwaysapps.com/",
    },
  ];
  return (
    <div className="text-white py-5 md:py-10 px-2.5 md:px-0">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-medium">
              {" "}
              <span className="text-purple-500 mr-1">#</span>projects
            </h3>
            <div className="lg:block hidden w-164 mx-auto h-[0.5px] bg-purple-400"></div>
          </div>
          <Button
            variant="transparent"
            imgClass="transform transition-transform duration-300 group-hover:translate-x-1"
            suffixImg={<IoIosArrowRoundForward size={28} />}
          >
            view all
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          <ProjectCards projectcard={projectcard} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
