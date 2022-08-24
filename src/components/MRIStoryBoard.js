import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper";

import 'swiper/css';
import "swiper/css/effect-cards";
const MRIStoryBoard = () => {
    return ( <div className='flex-row z-10 h-max'>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="justify-center items-center w-7/12 h-96"
      >
        <SwiperSlide className='flex items-center justify-center bg-red-500 rounded-md'>Slide 1</SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-sky-500 rounded-md'>Slide 2</SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-violet-500 rounded-md'>Slide 3</SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-green-500 rounded-md'>Slide 4</SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-pink-500 rounded-md'>Slide 5</SwiperSlide>
      </Swiper>
    </div>  );
}
 
export default MRIStoryBoard;