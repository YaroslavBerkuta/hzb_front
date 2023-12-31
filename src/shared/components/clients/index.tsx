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
      desc: "Будівництво житлової та комерційної нерухомості,  понад 50 реалізованих проектів.",
      img: "/bud.png",
    },
    {
      title: "ЕПІЦЕНТР",
      desc: "Лідер у сегменті роздрібної торгівлі товарами для дому та ремонту на ринку.",
      img: "/epicentr.png",
    },
    {
      title: "KERNEL",
      desc: "Провідний у світі та найбільший в Україні виробник та експортер соняшникової олії",
      img: "/kernel.png",
    },
    {
      title: "РІЕЛ",
      desc: "Корпорація нерухомості стала одним з лідерів на ринку, здавши в експлуатацію понад 105 тис кв. м житла.",
      img: "/riel.png",
    },
    {
      title: "URD",
      desc: "Успішна компанія із 52-річним досвідом роботи в галузі будівництва та ремонту автомобільних доріг в Україні.",
      img: "/urd.png",
    },
    {
      title: "БУД АЛЬЯНС",
      desc: "Будівельна компанія набула статусу надійної і найбільшої в Хмельницькій області,",
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
