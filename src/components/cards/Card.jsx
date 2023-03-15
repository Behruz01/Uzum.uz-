import React from "react";

const Card = () => {
  return (
    <div className="container mx-auto px-36 flex gap-3 my-12 flex-wrap">
      <div className="card w-56 hover:shadow">
        <img
          className="rounded-md hover:scale-90"
          src="https://images.uzum.uz/cesi7dol08k0o9qhc8jg/t_product_540_high.jpg#1678863933606"
          alt=""
        />
        <div className="info p-3">
          <p className="name">
            Smartfon Tecno Camon 19 Neo 6/128ГБ NFC 2SIM....
          </p>
          <p className="rating text-gray-400">5.0 (11 baho)</p>
          <p className="credit bg-yellow-200 rounded-md">332 000 so'm/oyiga</p>
          <p className="price font-medium">2 560 000 so'm</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
