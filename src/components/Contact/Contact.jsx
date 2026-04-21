import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import Button from "../Button/Button";
import cvImage from "../../assets/HiraCV.png";
import cvPdf from "../../assets/HiraBatoolCV.pdf";
import Model from "../Model/Model";
import { Link } from "react-router-dom";
import { BiLogoLinkedin } from "react-icons/bi";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleResumeClick = () => {
 
    setOpen(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = cvPdf; 
      link.download = "Hira-Batool-Resume.pdf"; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 300); 
  };

  return (
    <>
      <div className="text-primary lg:pt-25 pt-30 lg:pb-10 pb-5 px-2.5 md:px-2.5">
        <div className="container">
          <div className="lg:mb-8 mb-5">
            <h3 className="lg:text-[32px] text-2xl mb-2">
              <span className="text-cyan-500">/</span>contacts
            </h3>
            <p className="lg:text-base text-sm">Have an Idea? Let’s Talk!</p>
          </div>
          <div className="flex lg:flex-nowrap flex-wrap items-center gap-5">
            <div className="section left lg:flex-1 lg:text-base text-sm">
              <p>
                Every pixel matters and every line of code tells a story. If
                you’re looking for a passionate frontend developer to turn your
                vision into reality — let’s talk!
              </p>
            </div>
            <div className="section right lg:flex-1 ">
              <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-5">
                 <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 p-3">
                  <h5 className="mb-1 lg:text-xl text-lg font-semibold">
                    Hire me
                  </h5>
                  <Button
                    variant="transparent"
                    onClick={handleResumeClick}
                    className="hover:text-cyan-300 transition-all p-0!  "
                  >
                    View my resume
                  </Button>
                </div>
                 <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 p-3"> 
                  <h5 className="mb-1 lg:text-xl text-lg font-semibold">
                    Message me here
                  </h5>
                  <div className="flex items-center gap-2 mb-2">
                    <MdEmail size={24} />
                    <Link
                      to="mailto:batool.hira2020@gmail.com"
                      target="_blank"
                      className="text-sm lg:text-base hover:underline hover:text-cyan-300 transition"
                    >
                      batool.hira2020@gmail.com
                    </Link>
                  </div>

                  <div className="flex items-center gap-2">
                    <BiLogoLinkedin size={20} />
                    <Link
                      to="https://www.linkedin.com/in/hira-batool-9613a7258"
                      target="_blank"
                      className="text-sm lg:text-base hover:underline hover:text-cyan-300 transition"
                    >
                      Connect on LinkedIn
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <Model setIsOpen={() => setOpen(false)} className="w-[400px]!">
          <div>
            <img src={cvImage} alt="Resume preview" />
          </div>
        </Model>
      )}
    </>
  );
};

export default Contact;
