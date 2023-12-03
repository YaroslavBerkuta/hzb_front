"use client";

import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useFlatList } from "@/shared/hook";
import { getPartners } from "@/shared/api/partners";
import { getTranslate } from "@/shared/helpers";

export const Partner = () => {
  const { t, i18n } = useTranslation();
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const { items } = useFlatList({
    fetchItems: getPartners,
    needInit: true,
    limit: 10,
  });

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
      {items.map((it: any) => (
        <SwiperSlide key={it.id} className={styles.item}>
          <div className={styles.img}>
            <Image src={it.cover[0].fileUrl} alt={it.id} fill />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>
              <h3>{getTranslate<any>(it.translations, i18n.language)?.name}</h3>
            </div>
            <div className={styles.detail}>
              <Link className="btn-outline" href={it?.link}>
                {t("shared.element.goTo")}
              </Link>
              <p>
                {getTranslate<any>(it.translations, i18n.language)?.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}

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
