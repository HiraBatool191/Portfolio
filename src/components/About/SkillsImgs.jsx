import React from "react";
import SkillsCard from "./SkillsCard";
import htmlIcon from "../../assets/htmlIcon.png"
import cssIcon from "../../assets/cssIcon.png"
import jsIcon from "../../assets/jsIcon.png"
import reactIcon from "../../assets/react.svg"
import tailwindIcon from "../../assets/tailwindIcon.svg"
import viteIcon from "../../assets/viteIcon.svg"
import axiosIcon from "../../assets/axiosIcon.png"
import npmIcon from "../../assets/npmIcon.svg"
import zodIcon from "../../assets/zodIcon.svg"
import postmanIcon from "../../assets/postmanIcon.svg"
import reduxIcon from "../../assets/reduxIcon.svg"
import wordpressIcon from "../../assets/wordpressIcon.png"

const SkillsImgs = () => {
    const skills=[
        {
            icon:htmlIcon,
            title:"HTML"
        },
        {
            icon:cssIcon,
            title:"CSS"
        },
        {
            icon:jsIcon,
            title:"JS"
        },
        {
            icon:reactIcon,
            title:"React"
        },
         {
            icon:tailwindIcon,
            title:"Tailwind"
         },
         {
             icon:viteIcon,
             title:"Vite"
         },
        {
            icon:axiosIcon,
            title:"Axios"
        },
        {
            icon:zodIcon,
            title:"Zod"
        },
        {
            icon:npmIcon,
            title:"NPM"
        },
        {
            icon:postmanIcon,
            title:"Postman"
        },
        {
            icon:reduxIcon,
            title:"Redux"
        },
        {
            icon:wordpressIcon,
            title:"WordPress"
        },
    ]
  return (
    <div className="text-white lg:pt-10 pt-5 pb-10 lg:pb-20 px-2.5 md:px-2.5">
      <div className="container">
        <h3 className="lg:text-2xl text-xl mb-4">
          <span className="text-purple-500 mr-1">#</span>Skills
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-7 md:gap-4 gap-3 items-start ">
          <SkillsCard skills={skills}/>
        </div>
      </div>
    </div>
  );
};

export default SkillsImgs;
