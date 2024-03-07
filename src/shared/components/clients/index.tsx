"use client";
import Image from "next/image";
import React from "react";

import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";

export const Clients = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: "AUTOSTRADA",
      desc: t("client.el1"),
      img: "/auytostrada.png",
    },
    {
      title: "AVILA",
      desc: t("client.el2"),
      img: "/avila.png",
    },
    {
      title: "КРЕАТОР БУД",
      desc: t("client.el3"),
      img: "/bud.png",
    },
    {
      title: "ЕПІЦЕНТР",
      desc: t("client.el4"),
      img: "/epicentr.png",
    },
    {
      title: "KERNEL",
      desc: t("client.el5"),
      img: "/kernel.png",
    },
    {
      title: "РІЕЛ",
      desc: t("client.el6"),
      img: "/riel.png",
    },
    {
      title: "URD",
      desc: t("client.el7"),
      img: "/urd.png",
    },
    {
      title: "БУД АЛЬЯНС",
      desc: t("client.el8"),
      img: "/alians.png",
    },
  ];

  return (
    <div className={styles.flex}>
      {data.map((it, index) => (
        <div className={styles.item} key={index}>
          <Image
            src={it.img}
            alt="client"
            loading="lazy"
            layout="fill"
            objectFit="contain"
          />
          <div className={styles.info}>
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
