import React from "react";
import SkillsCard from "./SkillsCard";
import htmlIcon from "../../assets/htmlIcon.png"
import cssIcon from "../../assets/cssIcon.png"
import jsIcon from "../../assets/jsIcon.png"
import reactIcon from "../../assets/react.svg"

const SkillsImgs = () => {
    const skills=[
        {
            icon:htmlIcon
        },
        {
            icon:cssIcon
        },
        {
            icon:jsIcon
        },
        {
            icon:reactIcon
        },
        // {
        //     icon:tailwindIcon
        // },
        // {
        //     icon:viteIcon
        // },
        // {
        //     icon:htmlIcon
        // },
        // {
        //     icon:axiosIcon
        // },
        // {
        //     icon:zodIcon
        // },
        // {
        //     icon:npmIcon
        // },
        // {
        //     icon:postmanIcon
        // },
        // {
        //     icon:reduxIcon
        // },
    ]
  return (
    <div className="text-white lg:pt-10 pt-5 pb-10 lg:pb-20 px-2.5 md:px-2.5">
      <div className="container">
        <h3 className="text-2xl mb-4">
          <span className="text-purple-500 mr-1">#</span>Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 items-start ">
          <SkillsCard skills={skills}/>
        </div>
      </div>
    </div>
  );
};

export default SkillsImgs;
