import React from "react";
import locationIcon from "../../assets/lacation_icon.png";
import uzb_icon from "../../assets/uzb_flag_icon.jpg";
import uzum_market from "../../assets/uzum_market.png";

const Header = () => {
  return (
    <>
      <div className="bg-slate-100 ">
        <div className="container mx-auto px-36 py-1 flex justify-between">
          <div className="flex items-center">
            <img className="w-4 h-4 mr-2" src={locationIcon} alt="" />
            <p className="">Shahar:Toshkent</p>
            <h4 className=" ml-5">Topshirish punktlari</h4>
          </div>
          <p>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
          <div className="flex  ">
            <p className="mr-5 text-gray-500 hover:text-black">Savol-javoblar</p>
            <p className="mr-4 text-gray-500 hover:text-black">Buyurtmalarim</p>
            <span className="flex">
              <img className="w-6 h-6" src={uzb_icon} alt="" />
              <p>O'zbekcha</p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex container mx-auto px-36 items-center justify-between p-5">
        <img className="w-56 " src={uzum_market} alt="uzum.uz" />
        <div className="flex ">
          <button className="bg-violet-200 rounded-md p-2 text-violet-800">
            Katalog
          </button>
          <input
            className="w-96 border rounded-md ml-2 p-2"
            type="text"
            placeholder="Mahsulotlar va turkumlar izlash"
          />
        </div>
        <div className="btns">
          <span>
            <button className="ml-2 hover:bg-gray-200 rounded-md p-2 text-black ">
              Kirish
            </button>
          </span>
          <button className="ml-2 hover:bg-gray-200 rounded-md p-2 text-black ">
            Saralangan
          </button>
          <button className="ml-2 hover:bg-gray-200 rounded-md p-2 text-black ">
            Savat
          </button>
        </div>
      </div>
      <ul className="flex container mx-auto px-36 items-center gap-4">
        <li className="text-gray-400 cursor-pointer hover:text-black">Elektronika</li>
        <li className="text-gray-400 cursor-pointer hover:text-black">Maishiy texnika</li>
        <li className="text-gray-400 cursor-pointer hover:text-black">Kiyim</li>
        <li className="text-gray-400 cursor-pointer hover:text-black">Payabzallar</li>
        <li className="text-gray-400 cursor-pointer hover:text-black">Aksessuarlar</li>
        <li className="text-gray-400 cursor-pointer hover:text-black">Go'zallik</li>
        <li className="text-gray-400 cursor-pointer hover:text-black">Salomatlik</li>
        <li className="text-gray-400 cursor-pointer hover:text-black">Uy-ro'zg'or buyumlari</li>
        <li className="text-gray-400 cursor-pointer hover:text-black">Qurilish va ta'mirlash</li>
        <li className="text-gray-400 cursor-pointer hover:text-black">Avtotovarlar</li>
        <li className="text-gray-400 cursor-pointer hover:text-black">Bolalar tovarlari</li>
        <li className="text-gray-400 cursor-pointer hover:text-black">Yana^</li>

      </ul>
    </>
  );
};

export default Header;
