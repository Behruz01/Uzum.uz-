import React, { useContext, useEffect, useState } from "react";
import locationIcon from "../../assets/lacation_icon.png";
import uzb_icon from "../../assets/uzb_flag_icon.jpg";
import uzum_market from "../../assets/uzum_market.png";
import user_icon from "../../assets/user_icon.png";
import heart_icon from "../../assets/heart_icon.svg";
import bag_icon from "../../assets/bag_icon.svg";
import catalog_icon from "../../assets/catalog_icon.png";
import lupa_icon from "../../assets/lupa_icon.png";
import { useSelector } from "react-redux";
import { AuthContext } from "../contex/authContext";
import { Link } from "react-router-dom";
import axios from "axios";
import SingleCategoryPage from "../pages/CategoryPage";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const { isLogin } = useContext(AuthContext);
  const { favoriteProduct } = useSelector((state) => state.favorite);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

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
        <Link to={"/"}>
          <img className="w-56 " src={uzum_market} alt="uzum.uz" />
        </Link>

        <div className="flex ">
          <span className="bg-violet-200 flex rounded-md p-2 text-violet-800 cursor-pointer" >
            <img className="mr-2" src={catalog_icon} alt="" />
            Katalog
          </span>
          <div className="flex">
            <input
              className="w-96 border rounded-l-lg ml-2 p-2 "
              type="text"
              placeholder="Mahsulotlar va turkumlar izlash"
            />
            <span className="p-3 border rounded-r-lg  ">
              <img className="w-5 h-5 " src={lupa_icon} alt="" />
            </span>
          </div>
        </div>
        <div className="btns flex">
          {isLogin ? (
            <Link
              to={"/login"}
              className="ml-2 flex items-center hover:bg-gray-200 rounded-md p-2 text-black "
            >
              <img className="w-7 h-7 mr-2 " src={user_icon} alt="" />
              Chiqish
            </Link>
          ) : (
            <Link
              to={"/user"}
              className="ml-2 flex items-center hover:bg-gray-200 rounded-md p-2 text-black "
            >
              <img className="w-7 h-7 mr-2 " src={user_icon} alt="" />
              Kirish
            </Link>
          )}
          <Link
            to={"/likes"}
            className="ml-2 flex items-center hover:bg-gray-200 rounded-md p-2 text-black "
          >
            <img className="w-5 h-5 mr-2" src={heart_icon} alt="" />
            <p className="text-red-600">{favoriteProduct.length} </p>
            Saralangan
          </Link>
          <span className="ml-2 flex items-center hover:bg-gray-200 rounded-md p-2 text-black ">
            <img className="w-6 h-6 mr-2" src={bag_icon} alt="" />
            Savat
          </span>
        </div>
      </div>

      <ul className="flex container mx-auto px-36 items-center gap-28">
        {categories.map((category) => (
          <Link key={category.id} to={`/category/${category.id}`}>
            <li
              className="text-gray-400 cursor-pointer hover:text-black "
            >
              {category.name}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Header;
