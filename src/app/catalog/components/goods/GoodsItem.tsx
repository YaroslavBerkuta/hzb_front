import React, { FC } from "react";

import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  name: string;
  image: string;
  atribute: string;
  id: number;
}

export const GoodsItem: FC<IProps> = ({ name, image, atribute, id }) => {
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <h2>{name}</h2>
        <div className={styles.img}>
          <Image src={image} alt={name} layout="fill" />
        </div>
        <div
          className={styles.detail}
          dangerouslySetInnerHTML={{ __html: atribute }}
        />
      </div>
      <Link href={`/product/${id}`} className="btn-outline outline-gray">
        Детальніше
      </Link>
    </div>
  );
};
