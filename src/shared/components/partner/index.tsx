"use client";

import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./index.module.scss";
import Link from "next/link";

export const Partner = () => {
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
      spaceBetween={24}
      slidesPerView={3}
      ref={sliderRef}
      style={{ position: "relative", overflowY: "visible" }}
      breakpoints={{
        1680: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        425: {
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 1,
        },
        320: { slidesPerView: 1 },
      }}
    >
      <SwiperSlide
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), center / cover no-repeat url('/main.png'), lightgray -442.415px 0px / 274.155% 166.667% no-repeat`,
        }}
        className={styles.item}
      >
        <div className={styles.title}>
          <h3>Гармонія</h3>
        </div>
        <div className={styles.detail}>
          <Link className="btn-outline" href="">
            Перейти
          </Link>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), center / cover no-repeat url('/main.png'), lightgray -442.415px 0px / 274.155% 166.667% no-repeat`,
        }}
        className={styles.item}
      >
        <div className={styles.title}>
          <h3>Гармонія</h3>
        </div>
        <div className={styles.detail}>
          <Link className="btn-outline" href="">
            Перейти
          </Link>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), center / cover no-repeat url('/main.png'), lightgray -442.415px 0px / 274.155% 166.667% no-repeat`,
        }}
        className={styles.item}
      >
        <div className={styles.title}>
          <h3>Гармонія</h3>
        </div>
        <div className={styles.detail}>
          <Link className="btn-outline" href="">
            Перейти
          </Link>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), center / cover no-repeat url('/main.png'), lightgray -442.415px 0px / 274.155% 166.667% no-repeat`,
        }}
        className={styles.item}
      >
        <div className={styles.title}>
          <h3>Гармонія</h3>
        </div>
        <div className={styles.detail}>
          <Link className="btn-outline" href="">
            Перейти
          </Link>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </SwiperSlide>
      <div className={styles.navigation}>
        <div onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <g clipPath="url(#clip0_598_5316)">
              <rect
                x="33"
                y="33"
                width="32"
                height="32"
                transform="rotate(180 33 33)"
                stroke="#4B4B4B"
                strokeWidth="2"
              />
              <path d="M20 10L13 16.5L20 23" stroke="#4B4B4B" strokeWidth="2" />
            </g>
            <defs>
              <clipPath id="clip0_598_5320">
                <rect
                  width="34"
                  height="34"
                  fill="white"
                  transform="translate(34 34) rotate(180)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <g clipPath="url(#clip0_598_5316)">
              <rect
                x="1"
                y="1"
                width="32"
                height="32"
                stroke="#4B4B4B"
                strokeWidth="2"
              />
              <path d="M14 24L21 17.5L14 11" stroke="#4B4B4B" strokeWidth="2" />
            </g>
            <defs>
              <clipPath id="clip0_598_5316">
                <rect width="34" height="34" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </Swiper>
  );
};
