import React from "react";
import ProjectCards from "../ProjectCards/ProjectCards";

const SmallProjects = () => {
  const projectcard = [
    {
      frame: "Wordpress",
      title: "EG chauffeur",
      detail:
        "I worked on a Chauffeur project where I created custom car listings and detailed single pages for Ferrari, Lamborghini, Rolls Royce, and Urus. To enhance functionality and design, I integrated plugins such as ACF (Advanced Custom Fields), Elementor, Hello Elementor Child. These projects demonstrate my ability to deliver dynamic, user-friendly, and visually engaging WordPress solutions tailored to client requirements.",
     
    },
    {
      frame: "React, Tailwind, API, Context API, Toast",
      title: "E-commerce Website",
      detail:
        "This project is a complete e-commerce store built with JavaScript (React) that uses a mock/fake API to simulate backend functionality. Users can register and log in, browse a product catalog, view product details, and add items to their cart; each user’s cart is persisted (using the mock API/local storage) so their added items remain saved across sessions. The app includes full cart management—update quantities, remove items, and view cart totals—and a simulated checkout flow and validation. Because the backend is mocked, the project demonstrates realistic API interactions (fetching products, user authentication, and per-user cart storage) while remaining ideal for testing and rapid prototyping. The UI is responsive and focuses on clear state management, error handling, and a smooth user experience where different users can log in to their own accounts and maintain separate carts.",

    },
    {
      frame: "Wordpress",
      title: "Sirr Services",
      detail:
        "This project is a professional WordPress website built to showcase HVAC and Electrical services. It includes a “Get a Quote” form where users can easily submit their details to request service estimates. The site also features a gallery section highlighting completed projects and is designed with a fully responsive layout that works smoothly across all devices. A dedicated contact section provides the company’s phone number, email, and business details to build trust with users. To enhance functionality and performance, plugins such as Elementor, Contact Form plugin, ACF, Yoast SEO, and gallery plugins have been integrated, making the website both user-friendly and professional.",

    },
    {
      frame: "HTML, CSS",
      title: "Blue Printer",
      detail:
        "The Blue Printer website was built with HTML, CSS, and JavaScript, designed to give a modern and professional online presence. It features a clean hero section with the company logo and tagline, followed by well-structured sections for services, portfolio highlights, and client information. Smooth animations and interactive hover effects were added to make the browsing experience more engaging, while the layout was carefully crafted to stay fully responsive across all devices. The result is a polished, user-friendly, and visually appealing website that effectively represents the Blue Printer brand.",
   
    },
    {
      frame: "HTML, CSS, JS",
      title: "Kirstiefleur",
      detail:
        "This project was a pixel-perfect website built with HTML, CSS, and JavaScript according to the client’s exact design requirements. The site features a continuous animated background, created using CSS keyframes, which adds a smooth and modern visual effect. A custom JavaScript slider was implemented to handle image and content transitions seamlessly, giving the website a dynamic and interactive feel. The focus was on delivering a highly accurate, responsive, and visually engaging design that matched the client’s vision down to the smallest detail.",
   
    },
  ];
  return (
    <div className="text-white lg:pt-10 pt-5 pb-10 lg:pb-20 px-2.5 md:px-2.5">
      <div className="container">
        <h3 className="lg:text-2xl text-xl mb-4">
          <span className="text-purple-500 mr-1">#</span>Other Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start ">
          <ProjectCards projectcard={projectcard} />
        </div>
      </div>
    </div>
  );
};

export default SmallProjects;
