import React from "react";
import heart_icon from "../../../assets/heart_icon.svg";

const Product = ({
  title,
  price,
  description,
  category,
  image,
  rating,
  children,
}) => {
  return (
    <div className="card w-56 hover:shadow-xl hover:scale-105 hover:rounded-md 	">
      <span className="flex relative">
        <img className="rounded-md " src={image} alt="" />
        <img
          className="w-5 h-5 absolute left-48 top-3"
          src={heart_icon}
          alt=""
        />
      </span>
      <div className="info p-3">
        <p className="name">{title}</p>
        <p className="rating text-gray-400">⭐️{rating.rate}</p>
        <p className="credit bg-yellow-200 rounded-md">{price} 000 so'm/oyiga</p>
        <p className="price font-medium">{price}$</p>
      </div>
    </div>
  );
};
export default Product;
