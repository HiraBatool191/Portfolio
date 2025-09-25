import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import Button from "../Button/Button";
import cvImage from "../../assets/CV.jpeg"; 
import cvPdf from "../../assets/CV.pdf"; 
import Model from "../Model/Model";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleResumeClick = () => {
    // pehle modal open karo
    setOpen(true);

    // chhoti si delay ke baad download trigger karo
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = cvPdf; // PDF ka correct path
      link.download = "Hira-Batool-Resume.pdf"; // download file ka naam
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 300); // 300ms delay
  };

  return (
    <>
      <div className="text-white lg:pt-40 pt-30 lg:pb-10 pb-5 px-2.5 md:px-2.5">
        <div className="container">
          <div className="mb-8">
            <h3 className="text-[32px] mb-2">
              <span className="text-purple-500">/</span>contacts
            </h3>
            <p className="">Have an Idea? Let’s Talk!</p>
          </div>
          <div className="flex lg:flex-nowrap flex-wrap items-center gap-5">
            <div className="lg:flex-1">
              <p>
                Every pixel matters and every line of code tells a story. If
                you’re looking for a passionate frontend developer to turn your
                vision into reality — let’s talk!
              </p>
            </div>
            <div className="lg:flex-1 ">
              <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-5">
                <div className="border border-white/70 p-3">
                  <h5 className="mb-1 text-xl font-semibold">Hire me</h5>
                  <Button variant="transparent" onClick={handleResumeClick} className="hover:text-purple-300 transition-all">
                    View my resume
                  </Button>
                </div>
                <div className="border border-white/70 p-3">
                  <h5 className="mb-1 text-xl font-semibold">Message me here</h5>
                  <div className="flex items-center gap-2 mb-2">
                    <MdEmail size={28} />
                    <p>batool.hira2020@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdPhone size={24} />
                    <p>03314658009</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <Model setIsOpen={() => setOpen(null)} className="w-[400px]!">
          <div>
            <img src={cvImage} alt="Resume preview" />
          </div>
        </Model>
      )}
    </>
  );
};

export default Contact;
