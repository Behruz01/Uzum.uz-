import React, { useEffect, useState } from "react";
import BASE_URL from "../URL/Base_url";
import Product from "./product/Product";

const Card = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "products")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        // console.log(data);
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
            title={res.title}
            price={res.price}
            description={res.description}
            image={res.images[0]}
            rating={res.id}
            response={res}
          />
        ))}
      </div>
      <button className=" mb-10 bg-zinc-100 border border-zinc-200 hover:bg-zinc-50 py-2 rounded-lg w-96 text-zinc-700 mx-auto block font-medium">
        Show again 5 product
      </button>
    </div>
  );
};

export default Card;
