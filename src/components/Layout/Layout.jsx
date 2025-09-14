import React from "react";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
