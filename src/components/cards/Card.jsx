import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BASE_URL from "../URL/Base_url";
import Product from "./product/Product";

const Card = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "products")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);


  return (
    <div className="container mx-auto px-36">
      <h2 className="font-bold">Hafta aksiyasi:</h2>
      <div className=" flex gap-3 my-12 flex-wrap">
        {info?.map((res) => (
          <Product
          key={res.id}
          id={res.id}
          name={res.name}
          price={res.price}
          description={res.description}
          category={res.category}
          image={res.image}
          rating={res.rating}
          response={res}
          />
          ))}
      </div>
    </div>
  );
};

export default Card;
