"use client";
import React, { useCallback, useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import styles from "./index.module.scss";

export const Slider = () => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <Swiper
      className={styles.slider}
      modules={[Pagination]}
      pagination={{
        clickable: true,
        bulletActiveClass: styles.activeBullet,
        bulletClass: `swiper-pagination-bullet ${styles.bullet}`,
      }}
      ref={sliderRef}
    >
      <SwiperSlide>
        <Image src="/slide.png" width={880} height={680} alt="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/slide.png" width={880} height={680} alt="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/slide.png" width={880} height={680} alt="slide" />
      </SwiperSlide>
      <div className={styles.navigation}>
        <div onClick={handlePrev}>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="33"
              y="33"
              width="32"
              height="32"
              transform="rotate(180 33 33)"
              stroke="white"
              strokeWidth="2"
            />
            <path d="M20 10L13 16.5L20 23" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        <div onClick={handleNext}>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="32"
              height="32"
              stroke="white"
              strokeWidth="2"
            />
            <path d="M14 24L21 17.5L14 11" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </Swiper>
  );
};