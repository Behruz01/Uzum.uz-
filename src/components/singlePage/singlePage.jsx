import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import heart_icon from "../../assets/heart_icon.svg";
import reclame_icon from "../../assets/reklama.png";
import BASE_URL from "../URL/Base_url";

import SingleSlider from "./singleSlider/SingleSlider";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/slicers/counterSlice";
import { Link, useParams } from "react-router-dom";
const SinglePage = () => {
  const { id } = useParams();

  const [date, setDate] = useState({});
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await fetch(BASE_URL + "products/" + id);
        if (res.status === 500) {
          throw new Error("Ma'lumot topilmadi");
        }
        const data = await res.json();
        setDate(data);
        console.log(data);                        
      };
      getData()
    } catch (error) {
      setIsError(true);
    }
  }, [id]);

  const store = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const decrementHandler = () => {
    dispatch(decrement());
  };
  const incrementHandler = () => {
    dispatch(increment());
  };

  return (
    <Layout>
      {!isError ? (
        <div className="container mx-auto px-36 mt-14">
          <div className="wrapper flex gap-16 mb-20">
            <SingleSlider image={date.image} />
            <div className="right flex flex-col gap-4 ">
              <div className="flex gap-64 justify-between">
                <p className="rating">{date.rating}dan( 15 baho ) Koʻproq 50 buyurtma</p>
                <span className="flex">
                  <img className="w-5 h-5" src={heart_icon} alt="" />
                  <p className="like">istaklarga</p>
                </span>
              </div>
              <h2 className="name font-bold">{date.name}</h2>
              <p className="prodav">{date.category}</p>
              <p className="das">{date.description}</p>
              <img className="mx-auto w-3/4" src={reclame_icon} alt="" />
              <p>Miqdor:</p>
              <span className="count flex border   items-center w-20">
                <button
                  onClick={() => decrementHandler()}
                  className="font-bold text-2xl p-2 w-9"
                >
                  -
                </button>
                <p className="">{store.count}</p>
                <button
                  onClick={() => incrementHandler()}
                  className="font-bold text-2xl p-2 w-9"
                >
                  +
                </button>
              </span>
              <p>Narx:</p>
              <p className="price font-bold"> {date.price}$</p>
              <div className="btns flex gap-4 ">
                <button className="px-20 py-3  bg-violet-700 text-white rounded-md ">
                  Savatga qo'shish
                </button>
                <button className="px-20 py-3 border border-violet-600 text-violet-700  rounded-md">
                  Tugmani 1ta bosishda xarid qilish
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Layout>
          <div className="text-center">
            <p>Xatolik yuz berdi iltimos qaytadan urinib ko'ring!</p>
            <button className="bg-gray-500 py-4 mx-4 ">
              <Link to={"/"}>Bosh sahifaga qaytish</Link>
            </button>
          </div>
        </Layout>
      )}
    </Layout>
  );
};

export default SinglePage;
