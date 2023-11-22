import Image from "next/image";
import React from "react";

import styles from "./index.module.scss";

export const Clients = () => {
  const data = [
    {
      title: "AUTOSTRADA",
      desc: "Один із лідерів українського дорожнього будівництва, що виконує найскладніші проєкти на найвищому рівні",
      img: "/auytostrada.png",
    },
    {
      title: "AVILA",
      desc: "Лідер в області будівництва житлових комплексів в Україні.",
      img: "/avila.png",
    },
    {
      title: "КРЕАТОР БУД",
      desc: "Лідер в області будівництва житлових комплексів в Україні.",
      img: "/avila.png",
    },
    {
      title: "AVILA",
      desc: "Лідер в області будівництва житлових комплексів в Україні.",
      img: "/avila.png",
    },
    {
      title: "AVILA",
      desc: "Лідер в області будівництва житлових комплексів в Україні.",
      img: "/avila.png",
    },
    {
      title: "AVILA",
      desc: "Лідер в області будівництва житлових комплексів в Україні.",
      img: "/avila.png",
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
