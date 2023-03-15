import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Slider from "../pages/slider";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Slider />
      <Footer />
    </>
  );
};

export default Layout;
