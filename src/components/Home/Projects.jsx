import React from "react";
import Button from "../Button/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProjectCards from "../ProjectCards/ProjectCards";
import departedNote from "../../assets/departedNote.png";
import superAdmin from "../../assets/superAdmin.png";
import lendAgain from "../../assets/lendAgain.png";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const projectcard = [
    {
      img: departedNote,
      frame: "React.js, Tailwind CSS, TanStack Table",
      title: "DepartedNote",
      detail:
        "DepartedNote is a highly advanced and fully responsive web dashboard built with React.js and Tailwind CSS. It has been designed with a modern, clean, and user-centric approach, offering seamless navigation and intuitive layouts. The platform enables users to monitor, manage, and analyze key data metrics in real time through interactive tables powered by TanStack Table.",
      onLiveClick:
        "https://phpstack-1250693-5581655.cloudwaysapps.com/web-dashboard",
    },
    {
      img: superAdmin,
      frame: "React.js, Tailwind CSS, Toast Notifications, TanStack Table",
      title: "Custom CRM",
      detail:
        "Custom CRM is a feature-rich dashboard application developed with React.js and styled using Tailwind CSS. It offers a sleek interface equipped with toast notifications for real-time feedback and dynamic data tables for effective data manipulation.",
      onLiveClick:
        "https://phpstack-1250693-5637632.cloudwaysapps.com/super-admin/home",
    },
    {
      img: lendAgain,
      frame: "React.js, Tailwind CSS, React Query, TanStack Table",
      title: "Lend Again",
      detail:
        "Lend Again is a comprehensive web platform that focuses on secure user authentication, efficient data handling, and a seamless overall experience. Built with React.js, styled with Tailwind CSS, and enhanced using React Query for optimized data fetching.",
      onLiveClick: "https://phpstack-1250693-5693020.cloudwaysapps.com/",
    },
  ];

  return (
    <div className=" pb-15 md:py-20 px-2.5 md:px-0 ">
      
      <div className="container ">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h3 className="lg:text-3xl text-2xl font-medium text-white">
              <span className="text-cyan-500 mr-1">#</span>projects
            </h3>
            <div className="lg:block hidden w-164 mx-auto h-[0.5px] bg-cyan-400"></div>
          </div>
          <Button
            imgClass="transform transition-transform duration-300 group-hover:translate-x-1"
            suffixImg={<IoIosArrowRoundForward size={26} />}
            onClick={() => navigate("/work")}
          >
            view all
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          <ProjectCards projectcard={projectcard} isImg="true" />
        </div>
      </div>
     
    </div>
    
  );
};

export default Projects;
