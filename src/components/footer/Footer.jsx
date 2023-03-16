import React from "react";
import appStore_icon from "../../assets/AppStore.png";
import playMarket_icon from "../../assets/GooglePlay.png";
import instagram_icon from "../../assets/instagram_icon.jpg";
import telegram_icon from "../../assets/telegram_icon.webp";
import youtube_icon from "../../assets/youtube_icon.jpg";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-36 ">
        <div className="wrapper flex gap-40">
          <ul className="flex flex-col gap-4">
            <li className="font-bold">Biz haqimizda</li>
            <li className="cursor-pointer">Topshirish punktlari</li>
            <li className="cursor-pointer">Vakansiyalar</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="font-bold">Foydalanuvchilarga</li>
            <li className="cursor-pointer">Biz bilan bog'lanish</li>
            <li className="cursor-pointer">Savol-javob</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="font-bold">Tadbirkorlarga</li>
            <li className="cursor-pointer">Uzumda soting</li>
            <li className="cursor-pointer">Sotuvchi kabinetiga kirish</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="font-bold">Ilovani yuklab olish</li>
            <li className="flex gap-3">
              <img className="w-24 cursor-pointer" src={appStore_icon} alt="" />
              <img
                className="w-24 cursor-pointer"
                src={playMarket_icon}
                alt=""
              />
            </li>
            <li className="font-bold mt-10">Uzum ijtimoiy tarmoqlarda</li>
            <li className="flex gap-2">
              <img
                className="w-10 cursor-pointer"
                src={instagram_icon}
                alt=""
              />
              <img className="w-10" src={telegram_icon} alt="" />
              <img className="w-10" src={youtube_icon} alt="" />
              <img className="w-10" src={facebook_icon} alt="" />
            </li>
          </ul>
        </div>
        <hr className="w-full mt-20" />
        <div className="flex justify-between p-4">
          <div className="flex gap-3">
            <h3 className="font-bold cursor-pointer">Maxfiylik kelishuvi</h3>
            <h3 className="font-bold cursor-pointer">
              Foydalanuvchi kelishuvi
            </h3>
          </div>
          <p className="text-xs">
            «2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
            himoyalangan»
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
