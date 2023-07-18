import React, { FC } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  image: string;
  name: string;
  key: string;
}

export const CatalogPrewiev: FC<IProps> = ({ image, name, key }) => {
  return (
    <div className={styles.flex}>
      <Link href="/" className={styles.item}>
        <div className={styles.image}>
          <Image
            src={'/catalog.png'}
            loading="lazy"
            layout="fill"
            objectFit="fill"
            alt={name}
          />
        </div>
        <div className={styles.desc}>
          <Image src="/zb.svg" width={72} height={72} alt="zb" />
          <p>Залізобетонні вироби</p>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        <div className={styles.image}>
          <Image
            src={'/catalog.png'}
            loading="lazy"
            layout="fill"
            objectFit="fill"
            alt={name}
          />
        </div>
        <div className={styles.desc}>
          <Image src="/zb.svg" width={72} height={72} alt="zb" />
          <p>Бетони та розчини</p>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        <div className={styles.image}>
          <Image
            src={'/catalog.png'}
            loading="lazy"
            layout="fill"
            objectFit="fill"
            alt={name}
          />
        </div>
        <div className={styles.desc}>
          <Image src="/zb.svg" width={72} height={72} alt="zb" />
          <p>Вироби з деревини</p>
        </div>
      </Link>
    </div>
  );
};
