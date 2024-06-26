"use client";
import React, { FC, useCallback, useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import SwiperCore from 'swiper';
SwiperCore.use([Autoplay]);

import styles from "./index.module.scss";

interface IProps {
  slides?: any[];
  width?: number;
  height?: number;
  autoplay?: { delay: number };
  autoplayEnabled?: boolean;
}

export const Slider: FC<IProps> = ({ slides, width, height, autoplay, autoplayEnabled }) => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const renderItem = useCallback(
    (it: string, index: number) => {
      const parts = it.split(".");
      const fileFormat = parts[parts.length - 1];
      console.log('fileFormat:',fileFormat)
      return (
        <SwiperSlide key={index}>
          {
            fileFormat !== 'mp4' ?  <Image src={it} width={width} height={height} alt="slide" /> : <video src={it} width={width} height={height} controls/>
          }
        </SwiperSlide>
      );
    },
    [slides]
  );
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
      autoplay={autoplayEnabled ? { delay: autoplay?.delay, disableOnInteraction: false } : undefined}
    >
      {slides?.map((it: any, index) => renderItem(it, index))}
      <div className={styles.navigation}>
        <div onClick={handlePrev}>
          <svg
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
