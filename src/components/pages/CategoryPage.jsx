import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import heart_icon from "../../assets/heart_icon.svg";

function SingleCategoryPage(props) {
  const { id } = useParams();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/categories/${id}/products`
      );
      const categoryData = await response.json();
      setCategory(categoryData);
    };
    fetchCategory();
  }, [props.id]);
  return (
    <div className="container mx-auto px-36">
      <div className="flex gap-3 my-12 flex-wrap">
        {category.map(
          (element) => (
            (
              <div key={element.id} className="card w-56 hover:shadow-xl hover:scale-105 hover:rounded-md 	">
                <span className="flex relative">
                  <Link key={element.id} to={"/single/" + element.id}>
                    <img
                      className="rounded-md "
                      src={element.images[0]}
                      alt=""
                    />
                  </Link>

                  <img
                    // onClick={() => updateLikeHandler(response)}
                    className="w-5 h-5 absolute left-48 top-3 z-10"
                    src={heart_icon}
                    alt=""
                  />
                </span>
                <Link key={element.id} to={"/single/" + element.id}>
                  <div className="info p-3">
                    <p className="name font-bold">{element.title}</p>
                    <p className="rating text-gray-400">
                      {element.description}
                    </p>

                    <p className="rating text-black">⭐️{element.id} baho</p>
                    <p className="credit bg-yellow-200 rounded-md">
                      {element.price} 000 so'm/oyiga
                    </p>
                    <p className="price font-medium">{element.price}$</p>
                  </div>
                </Link>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}

export default SingleCategoryPage;
