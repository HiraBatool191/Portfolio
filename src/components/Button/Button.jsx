// import React from "react";

// const Button = ({
//   children,
//   prefixImg,
//   suffixImg,
//   variant = "defaultBtn",
//   className = "",
//   onClick,
//   type = "button",
//   imgClass,
//   ...rest
// }) => {
//   const variants = {
//     defaultBtn: "text-primary border border-cyan-500 hover:bg-[#C778DD]/20",
//     transparent: "border-0 bg-transparent text-primary p-0!",
//   };

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={`group whitespace-nowrap capitalize px-5 py-1.5 text-sm lg:text-base transition duration-300 flex items-center gap-2 justify-center cursor-pointer ${variants[variant]} ${className}`}
//       {...rest}
//     >
//       {prefixImg && prefixImg}
//       {children}
//       {suffixImg && (
//         <span className={`${imgClass}`}>
//           {suffixImg}
//         </span>
//       )}
//     </button>
//   );
// };

// export default Button;


import React from "react";

const Button = ({
  children,
  prefixImg,
  suffixImg,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  imgClass = "",
  ...rest
}) => {
  const variants = {
    primary:
      "bg-cyan-500 text-white hover:bg-cyan-600 shadow-md hover:shadow-cyan-500/40",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group whitespace-nowrap capitalize px-5 py-2 rounded-xl text-sm lg:text-base font-medium transition-all duration-300 flex items-center gap-2 justify-center cursor-pointer 
      ${variants[variant]} ${className}`}
      {...rest}
    >
      {prefixImg && prefixImg}

      <span>{children}</span>

      {suffixImg && (
        <span className={`transition-transform duration-300 group-hover:translate-x-1 ${imgClass}`}>
          {suffixImg}
        </span>
      )}
    </button>
  );
};

export default Button;