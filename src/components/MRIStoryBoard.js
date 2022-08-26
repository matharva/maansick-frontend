import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { useEffect, useState } from "react";

import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";
import IMG from "../images/fa.png";

// SwiperCore.use([Autoplay]);

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
          {item.name}
          <img src={item.img} alt="" />
        </SwiperSlide>
      </>
    );
  });
};


const MRIStoryBoardSwiper = () => {
  return (
    <div className="flex-row h-max">
      <div className="">Feature Learning</div>
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

const MRIStoryBoard = () => {
  const res = {
    output: [
      "/static/images/p06871_bmatrix_1000.nii.gz_0_3.png",
      "/static/images/p06871_bmatrix_1000.nii.gz_2_3.png",
      "/static/images/p06871_bmatrix_1000.nii.gz_4_3.png",
      "/static/images/p06871_bmatrix_1000.nii.gz_7_3.png",
    ],
    quads: {
      diseases: [],
      lobes: [],
      quad: "C",
      suggestions: [],
    },
  };
  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <div className="font-bold text-3xl mb-4">Feature Learning</div>
      <div className="flex" style={{ width: "75%" }}>
        {res?.output?.map(() => {
          return (
            <div className="">
              <img src={IMG} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MRIStoryBoard;
