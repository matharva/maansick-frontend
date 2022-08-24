import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";
import IMG from "../images/fa.png";

SwiperCore.use([Autoplay]);

const renderSliderCards = () => {
  const items = [
    {
      name: "slider1",
      color: "bg-red-100",
      img: IMG,
    },
    {
      name: "slider2",
      color: "bg-red-200",
      img: IMG,
    },
    {
      name: "slider3",
      color: "bg-red-300",
      img: IMG,
    },
  ];
  return items.map((item) => {
    return (
      <>
        <SwiperSlide
          className={`flex items-center justify-center ${item.color} rounded-md`}
        >
          {/* {item.name} */}
          <img src={item.img} alt="" />
        </SwiperSlide>
      </>
    );
  });
};

const MRIStoryBoard = () => {
  return (
    <div className="flex-row h-max">
      <Swiper
        effect={"cards"}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        //   waitForTransition: true,
        // }}
        grabCursor={true}
        modules={[EffectCards]}
        className="justify-center items-center w-7/12 h-96"
      >
        {renderSliderCards()}
        <SwiperSlide className="flex items-center justify-center bg-pink-500 rounded-md">
          <div className="div">Load 3D model</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MRIStoryBoard;
