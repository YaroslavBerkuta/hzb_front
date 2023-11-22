import Image from "next/image";
import React from "react";

import styles from "./index.module.scss";

export const Clients = () => {
  const data = [
    {
      title: "AUTOSTRADA",
      desc: "Один із лідерів українського дорожнього будівництва, що виконує найскладніші проєкти на найвищому рівні",
      img: "./public/auytostrada.png",
    },
  ];

  return (
    <div className={styles.flex}>
      {
        data.map()
      }
      <div className={styles.item}>
        <Image
          src="/client.png"
          alt="client"
          loading="lazy"
          layout="fill"
          objectFit="contain"
        />
        <div className={styles.info}>
          <h3>ЕПІЦЕНТР</h3>
          <p>
            Лідер у сегменті роздрібної торгівлі товарами для дому та ремонту на
            ринку.
          </p>
        </div>
      </div>
    </div>
  );
};
