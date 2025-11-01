import React from "react";
import Banner from "./Banner";
import Projects from "./Projects";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

const Home = () => {
  return (
    <>
      <Banner />
      <Projects />
      <Skills />
      <div className="text-primary lg:py-20 py-10 relative overflow-hidden px-2.5 md:px-0">
        <AboutMe isBtn={true} isHead={true} />
      </div>
    </>
  );
};

export default Home;

//https://www.figma.com/design/lgHVCKSbr7YLZGq2WvHd4a/Portfolio--Community-?node-id=0-1&p=f&t=PdohUnPmJp0sIGbt-0
