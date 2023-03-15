import React from "react";
import heart_icon from "../../assets/heart_icon.svg";

const Card = () => {
  return (
    <>
      <div className="container mx-auto px-36">
        <h2 className="font-bold">Hafta aksiyasi:</h2>
        <div className=" flex gap-3 my-12 flex-wrap">
          <div className="card w-56 hover:shadow-xl hover:scale-105 hover:rounded-md 	">
            <span className="flex relative">
              <img
                className="rounded-md "
                src="https://images.uzum.uz/cesi7dol08k0o9qhc8jg/t_product_540_high.jpg#1678863933606"
                alt=""
              />
              <img
                className="w-5 h-5 absolute left-48 top-3"
                src={heart_icon}
                alt=""
              />
            </span>
            <div className="info p-3">
              <p className="name">
                Smartfon Tecno Camon 19 Neo 6/128ГБ NFC 2SIM....
              </p>
              <p className="rating text-gray-400">⭐️ 5.0 (11 baho)</p>
              <p className="credit bg-yellow-200 rounded-md">
                332 000 so'm/oyiga
              </p>
              <p className="price font-medium">2 560 000 so'm</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
