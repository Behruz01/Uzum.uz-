import React from "react";
import Layout from "../layout/Layout";
import heart_icon from "../../assets/heart_icon.svg";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Likes = () => {
  const { favoriteProduct } = useSelector((state) => state.favorite);
  const { id } = useParams();
  return (
    <Layout>
      <div className="container mx-auto px-36">
        <div className=" flex gap-3 my-12 flex-wrap">
          {favoriteProduct.map((product) => (
            <div
              key={product.id}
              className="card w-56 hover:shadow-xl hover:scale-105 hover:rounded-md"
            >
              <span className="flex relative">
                <Link key={id} to={"/single/" + id}>
                  <img
                    className="rounded-md "
                    src={product.images[0]}
                    alt={product.title}
                  />
                </Link>
                <img
                  className="w-5 h-5 absolute left-48 top-3 z-10"
                  src={heart_icon}
                  alt=""
                />
              </span>
              <Link key={id} to={"/single/" + id}>
                <div className="info p-3">
                  <p className="name font-bold">{product.title}</p>
                  <p className="rating text-gray-400">{product.description}</p>
                  <p className="rating text-black">⭐️{product.price} baho</p>
                  <p className="credit bg-yellow-200 rounded-md">
                    {product.price} 000 so'm/oyiga
                  </p>
                  <p className="price font-medium">{product.price}$</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Likes;
