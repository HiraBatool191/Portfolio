import React from "react";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import Fixed from "../../shared/Fixed/Fixed";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="hidden lg:block fixed top-1/5 left-4 -translate-y-1/2 z-99 ">
        <Fixed />
      </div>

      <div className="mt-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
