import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";

const renderSliderCards = () => {
  const items = [
    {
      name: "slider1",
      color: "bg-red-100",
    },
    {
      name: "slider2",
      color: "bg-red-200",
    },
    {
      name: "slider3",
      color: "bg-red-300",
    },
  ];
  return items.map((item) => {
    return (
      <>
        <SwiperSlide
          className={`flex items-center justify-center ${item.color} rounded-md`}
        >
          {item.name}
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
        grabCursor={true}
        modules={[EffectCards]}
        className="justify-center items-center w-7/12 h-96"
      >
        {/* <SwiperSlide className="flex items-center justify-center bg-red-500 rounded-md">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-sky-500 rounded-md">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-violet-500 rounded-md">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-green-500 rounded-md">
          Slide 4
        </SwiperSlide> */}
        {renderSliderCards()}
        <SwiperSlide className="flex items-center justify-center bg-pink-500 rounded-md">
          <div className="div">Load 3D model</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MRIStoryBoard;
