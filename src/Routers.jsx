import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import HomePage from "./Pages/HomePage";
import WorkPage from "./Pages/WorkPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

const Routers = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="about-me" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
