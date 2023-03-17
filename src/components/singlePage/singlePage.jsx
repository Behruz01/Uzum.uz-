import React from "react";
import Layout from "../layout/Layout";
import heart_icon from "../../assets/heart_icon.svg";
import reclame_icon from "../../assets/reklama.png";

import SingleSlider from "./singleSlider/SingleSlider";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/slicers/counterSlice";
const SinglePage = () => {
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
      <div className="container mx-auto px-36 mt-14">
        <div className="wrapper flex gap-16 mb-20">
          <SingleSlider />
          <div className="right flex flex-col gap-4 ">
            <div className="flex gap-64 justify-between">
              <p className="rating">5.0 ( 15 baho ) Koʻproq 50 buyurtma</p>
              <span className="flex">
                <img className="w-5 h-5" src={heart_icon} alt="" />
                <p className="like">istaklarga</p>
              </span>
            </div>
            <h2 className="name font-bold">
              Smartfon TECNO Pop 6 Pro 2/32ГБ 2SIM + ekologik sumka
            </h2>
            <p className="prodav">Sotuvchi: TECH VIBE</p>
            <p className="das">Yetkazib berish: 1 kun, bepul</p>
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
            <p className="price font-bold"> 1 350 000 so'm</p>
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
    </Layout>
  );
};

export default SinglePage;
