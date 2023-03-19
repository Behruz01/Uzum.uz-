import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import BASE_URL from "../URL/Base_url";

const Likes = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "products/")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-36">
        <h1 className="font-bold">Sevimlilar</h1>
        {categories.map((category) => {
          <li>{category}</li>;
        })}
      </div>
    </Layout>
  );
};

export default Likes;
