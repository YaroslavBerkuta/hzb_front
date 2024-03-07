import React, { FC } from "react";

import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Lang } from "@/shared/helpers";

interface IProps {
  name: string;
  image: string;
  atribute: string;
  id: number;
  lang: string;
}

export const GoodsItem: FC<IProps> = ({ name, image, atribute, id, lang }) => {
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <h2>{name}</h2>
        <div className={styles.img}>
          <Image src={image} alt={name} layout="fill" />
        </div>
        <p className={styles.shortTitle}>
          {lang === Lang.UA ? "Короткий опис" : "Short descriptions"}
        </p>
        <div
          className={styles.detail}
          dangerouslySetInnerHTML={{ __html: atribute }}
        />
      </div>
      <Link href={`/product/${id}`}>
        {lang === Lang.UA ? "Детальніше" : "Details"}
      </Link>
    </div>
  );
};
