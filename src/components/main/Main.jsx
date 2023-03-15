import React from "react";
import Card from "../cards/Card";
import Layout from "../layout/Layout";
import Slider from "../pages/slider";

const Main = () => {
  return (
    <>
      <Layout>
        <Slider />
        <Card />
      </Layout>
    </>
  );
};

export default Main;
