import React, { FC } from "react";
import Image from "next/image";

import styles from "../index.module.scss";
import { truncate } from "lodash";

interface IProps {
  title: string;
  desc: string;
  image: string;
}

export const ProjectItems: FC<IProps> = ({ title, desc, image }) => {
  return (
    <div className={styles.item}>
      {image && (
        <div className={styles.image}>
          <Image src={image} alt="project" width={680} height={500} />
        </div>
      )}
      <div className={styles.detail}>
        <div className={styles.title}>
          <h2>
            {truncate(title, {
              length: 50,
            })}
          </h2>
          <span>2012-2015</span>
        </div>
        <div className={styles.city}>
          <Image src="/pin.png" width={19} height={26} alt="pin" />
          <p>м. Хмельницький</p>
        </div>
        <div className={styles.product}>
          <Image src="/inbox.png" width={19} height={26} alt="pin" />
          <p>Обсяг продукції: </p>
        </div>
        <ul>
          <li>Бетонні платформи- 200шт </li>
          <li>Бетон-2000м3</li>
        </ul>
      </div>
    </div>
  );
};
