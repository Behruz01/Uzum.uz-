import React from "react";
import Layout from "../layout/Layout";
import heart_icon from "../../assets/heart_icon.svg";



const Likes = ({name,description,category,rating,price,log}) => {
console.log(log);
  return (
    <Layout>
      <div className="container mx-auto px-36">
        <h1 className="font-bold">Sevimlilar</h1>
        <div className="card w-56 hover:shadow-xl hover:scale-105 hover:rounded-md 	">
          <span className="flex relative">
            {/* <Link key={id} to={"/single/" + id}> */}
            <img className="rounded-md " src="" alt="" />
            {/* </Link> */}

            <img
              className="w-5 h-5 absolute left-48 top-3 z-10"
              src={heart_icon}
              alt=""
            />
          </span>
          {/* <Link key={id} to={"/single/" + id}> */}
          <div className="info p-3">
            <p className="name font-bold">{}</p>
            <p className="rating text-gray-400">{}</p>
            <p className="rating text-black">
              ⭐️{} baho {}
            </p>
            <p className="credit bg-yellow-200 rounded-md">{} 000 so'm/oyiga</p>
            <p className="price font-medium">{}$</p>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </Layout>
  );
};

export default Likes;
