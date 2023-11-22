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
        data.map(it=>)
      }
      
    </div>
  );
};
