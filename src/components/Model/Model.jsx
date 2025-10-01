import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Model = ({ setIsOpen, children, className = "" }) => {
  return (
    <div
      className="fixed top-18 inset-0 bg-black/20 flex justify-center items-center z-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`bg-white md:p-7.5 p-3 py-8 rounded-[10px] relative w-[600px] md:max-h-[80vh] max-h-[80vh] overflow-y-auto mx-4 my-6 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 md:top-3 right-3 text-gray-700 hover:text-black transition"
        >
          <IoIosCloseCircleOutline size={24} className="cursor-pointer" />
        </button>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Model;
