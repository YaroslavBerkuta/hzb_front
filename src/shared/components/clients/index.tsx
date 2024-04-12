"use client";
import Image from "next/image";
import React, { useCallback, useRef } from "react";

import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide} from "swiper/react";
import { getPartners } from "@/shared/api/partners";
import { getTranslate } from "@/shared/helpers";
import { useFlatList } from "@/shared/hook";
import { i18n } from "next-i18next";
import Link from "next/link";

export const Clients = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 0,
      title: "AUTOSTRADA",
      desc: t("client.el1"),
      img: "/auytostrada.png",
    },
    {
      id: 1,
      title: "AVILA",
      desc: t("client.el2"),
      img: "/avila.png",
    },
    {
      id: 2,
      title: "КРЕАТОР БУД",
      desc: t("client.el3"),
      img: "/bud.png",
    },
    {
      id: 3,
      title: "ЕПІЦЕНТР",
      desc: t("client.el4"),
      img: "/epicentr.png",
    },
    {
      id: 4,
      title: "KERNEL",
      desc: t("client.el5"),
      img: "/kernel.png",
    },
    {
      id: 5,
      title: "РІЕЛ",
      desc: t("client.el6"),
      img: "/riel.png",
    },
    {
      id: 6,
      title: "URD",
      desc: t("client.el7"),
      img: "/urd.png",
    },
    {
      id: 7,
      title: "БУД АЛЬЯНС",
      desc: t("client.el8"),
      img: "/alians.png",
    },
  ];
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
    limit: 8,
  });

  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={4}
      ref={sliderRef}
      style={{ position: "relative", overflowY: "visible" }}
      breakpoints={{
        1440: {
          slidesPerView: 4,
        },
        550: {
          slidesPerView: 3,
        },
        425: {
          slidesPerView: 2,
        },
        320: { slidesPerView: 1 },
      }}
    >
      {data.map((it: any) => (
        <SwiperSlide key={it.id} className={styles.item}>
          <div className={styles.img}>
            <Image src={it.img} alt={it.id} fill />
          </div>
          <div className={styles.info}>
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
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
