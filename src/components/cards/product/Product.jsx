import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import heart_icon from "../../../assets/heart_icon.svg";
import { add, remove } from "../../../store/slicers/favoriteSlice";

const Product = ({ title, price, description, image, rating, id, response }) => {
  const dispatch = useDispatch();

  const { favoriteProduct } = useSelector((state) => state.favorite);
  const updateLikeHandler = (Product) => {
    let hasProduct = false;
    favoriteProduct.forEach((element) => {
      if (element.id === Product.id) {
        hasProduct = true;
      }
    });
    if (hasProduct) {
      dispatch(remove(Product));
    } else {
      dispatch(add(Product));
    }
  };
  return (
    <div className="card w-56 hover:shadow-xl hover:scale-105 hover:rounded-md 	">
      <span className="flex relative">
        <Link key={id} to={"/single/" + id}>
          <img className="rounded-md " src={image} alt="" />
        </Link>

        <img
          onClick={() => updateLikeHandler(response)}
          className="w-5 h-5 absolute left-48 top-3 z-10"
          src={heart_icon}
          alt=""
        />
      </span>
      <Link key={id} to={"/single/" + id}>
        <div className="info p-3">
          <p className="name font-bold">{title}</p>
          <p className="rating text-gray-400">{description}</p>

          <p className="rating text-black">⭐️{rating} baho</p>
          <p className="credit bg-yellow-200 rounded-md">
            {price} 000 so'm/oyiga
          </p>
          <p className="price font-medium">Price: {price}$</p>
        </div>
      </Link>
    </div>
  );
};
export default Product;
