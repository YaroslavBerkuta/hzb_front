import React from "react";

import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

export const GoodsItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <h2>Плити перекриття</h2>
        <div className={styles.img}>
          <Image src={"/about.png"} alt={"product"} layout="fill" />
        </div>
        <div className={styles.detail}>
          <span>B 1200 мм</span>
          <span>H 220 мм</span>
        </div>
        <Link href="/product/1" className="btn-outline outline-gray">
          Детальніше
        </Link>
      </div>
    </div>
  );
};
