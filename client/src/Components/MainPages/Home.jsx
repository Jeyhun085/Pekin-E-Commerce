import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Home.styles.scss";

// import required modules
import { Navigation } from "swiper";

export default function Home() {
  return (
    <div className="home-container">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="slide1"><h1>Hello</h1></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
      </div>
  );
}
