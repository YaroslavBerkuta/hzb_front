"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./index.module.scss";

export const Partner = () => {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide
        style={{
          background: `center / cover no-repeat url('/main.png')`,
        }}
        className={styles.item}
      ></SwiperSlide>
      <SwiperSlide
        style={{
          background: `center / cover no-repeat url('/main.png')`,
        }}
        className={styles.item}
      ></SwiperSlide>
      <SwiperSlide
        style={{
          background: `center / cover no-repeat url('/main.png')`,
        }}
        className={styles.item}
      ></SwiperSlide>
    </Swiper>
  );
};
