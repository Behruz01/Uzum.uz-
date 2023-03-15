import React from "react";
import Card from "../cards/Card";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Slider from "../pages/slider";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Slider />
      <Card />
      <Footer />
    </>
  );
};

export default Layout;
