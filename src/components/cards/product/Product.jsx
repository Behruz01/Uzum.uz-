import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import heart_icon from "../../../assets/heart_icon.svg";
import { add, remove } from "../../../store/slicers/favoriteSlice";

const Product = ({ name, price, description, category, image, rating, id,response }) => {
  const dispatch = useDispatch();

  const { favoriteVideos } = useSelector((state) => state.favorite);
  console.log(favoriteVideos);
  const updateLikeHandler = (video) => {
    let hasVideo = false;
    favoriteVideos.forEach((element) => {
      if (element.id === video.id) {
        hasVideo = true;
      }
    });
    if (hasVideo) {
      dispatch(remove(video));
    } else {
      dispatch(add(video));
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
          <p className="name font-bold">{name}</p>
          <p className="rating text-gray-400">{category}</p>
          <p className="rating text-black">
            ⭐️{rating} baho {rating} tadan{" "}
          </p>
          <p className="credit bg-yellow-200 rounded-md">
            {price} 000 so'm/oyiga
          </p>
          <p className="price font-medium">{price}$</p>
        </div>
      </Link>
    </div>
  );
};
export default Product;
