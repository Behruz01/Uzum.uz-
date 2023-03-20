import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from "swiper";

const SingleSlider = ({ image }) => {
  return (
    <Swiper
      className="w-2/5"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img className="w-full h-full  rounded-lg mt-8 mb-16" src={image} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-full rounded-lg mt-8 mb-16" src={image} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-full rounded-lg mt-8 mb-16" src={image} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-full rounded-lg mt-8 mb-16" src={image} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-full rounded-lg mt-8 mb-16" src={image} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-full rounded-lg mt-8 mb-16" src={image} alt="" />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img className="w-full h-full rounded-lg mt-8 mb-16" src={image} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SingleSlider;
