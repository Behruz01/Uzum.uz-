import React from "react";
import locationIcon from "../../assets/lacation_icon.png";
import uzb_icon from "../../assets/uzb_flag_icon.jpg";
import uzum_market from "../../assets/uzum_market.png";
import user_icon from "../../assets/user_icon.png";
import heart_icon from "../../assets/heart_icon.svg";
import bag_icon from "../../assets/bag_icon.svg";
import catalog_icon from "../../assets/catalog_icon.png";

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
            <p className="mr-5 text-gray-500 hover:text-black">
              Savol-javoblar
            </p>
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
          <span className="bg-violet-200 flex rounded-md p-2 text-violet-800">
            <img className="mr-2" src={catalog_icon} alt="" />
            Katalog
          </span>
          <input
            className="w-96 border rounded-md ml-2 p-2"
            type="text"
            placeholder="Mahsulotlar va turkumlar izlash"
          />
        </div>
        <div className="btns flex">
          <span className="ml-2 flex items-center hover:bg-gray-200 rounded-md p-2 text-black ">
            <img className="w-7 h-7 mr-2 " src={user_icon} alt="" />
            Kirish
          </span>
          <span className="ml-2 flex items-center hover:bg-gray-200 rounded-md p-2 text-black ">
            <img className="w-5 h-5 mr-2" src={heart_icon} alt="" />
            Saralangan
          </span>
          <span className="ml-2 flex items-center hover:bg-gray-200 rounded-md p-2 text-black ">
            <img className="w-6 h-6 mr-2" src={bag_icon} alt="" />
            Savat
          </span>
        </div>
      </div>
      <ul className="flex container mx-auto px-36 items-center gap-3">
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] " >
          Elektronika
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Maishiy texnika
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">Kiyim</li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Payabzallar
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Aksessuarlar
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Go'zallik
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Salomatlik
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Uy-ro'zg'or buyumlari
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Qurilish va ta'mirlash
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Avtotovarlar
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">
          Bolalar tovarlari
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-black hover:border-b-[2px] ">Yana^</li>
      </ul>
    </>
  );
};

export default Header;
