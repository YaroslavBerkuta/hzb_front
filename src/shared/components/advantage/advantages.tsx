import React, { FC } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { advantages } from "@/shared/config";

export const Advantages = () => {
  return (
    <div className={styles.flex}>
      {advantages.map((it, index) => (
        <div className={styles.item} key={index}>
          <div>
            <Image src={it.image} width={72} height={72} alt={it.title} />
          </div>
          <div className={styles.info}>
            <h3>{it.title}</h3>
            <p>{it.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
