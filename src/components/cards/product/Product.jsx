import React from "react";
import { useDispatch, useSelector } from "react-redux";
import heart_icon from "../../../assets/heart_icon.svg";
import { add, remove } from "../../../store/slicers/favoriteSlice";

const Product = ({ title, price, description, category, image, rating }) => {
  const dispatch = useDispatch();
  
  const { favoriteProduct } = useSelector((state) => state.favorite);
  const updateLikeHandler = (card) => {
    let hasProduct = false;
    favoriteProduct.forEach((element) => {
      if (element.id === card.id) {
        hasProduct = true;
      }
    });
    if (hasProduct) {
      dispatch(remove(card));
    } else {
      dispatch(add(card));
    }
  };
  return (
    <div className="card w-56 hover:shadow-xl hover:scale-105 hover:rounded-md 	">
      <span className="flex relative">
        <img className="rounded-md " src={image} alt="" />
        <img
          onClick={() => updateLikeHandler()}
          className="w-5 h-5 absolute left-48 top-3 z-10"
          src={heart_icon}
          alt=""
        />
      </span>
      <div className="info p-3">
        <p className="name">{title}</p>
        <p className="rating text-gray-400">{rating.rate}</p>
        <p className="credit bg-yellow-200 rounded-md">
          {price} 000 so'm/oyiga
        </p>
        <p className="price font-medium">{price}$</p>
      </div>
    </div>
  );
};
export default Product;
