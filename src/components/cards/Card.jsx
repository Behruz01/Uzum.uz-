import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
          <Link key={res.id} to={"/single/" + res.id}>
            <Product
              key={res.id}
              title={res.title}
              price={res.price}
              description={res.description}
              category={res.category}
              image={res.image}
              rating={res.rating}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
