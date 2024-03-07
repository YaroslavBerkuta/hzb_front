import React, { FC } from "react";
import Image from "next/image";

import styles from "../index.module.scss";
import { truncate } from "lodash";
import { Lang } from "@/shared/helpers";

interface IProps {
  title: string;
  desc: string;
  image: string;
  years: string;
  info: any[];
  lang: string;
}

export const ProjectItems: FC<IProps> = ({
  title,
  desc,
  image,
  info,
  years,
  lang,
}) => {
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
          <span>{years}</span>
        </div>
        <div className={styles.city}>
          <Image src="/pin.png" width={19} height={26} alt="pin" />
          <p>{desc}</p>
        </div>
        <div className={styles.product}>
          <Image src="/inbox.png" width={19} height={26} alt="pin" />
          <p>{lang === Lang.UA ? "Обсяг продукції:" : "Volume of products:"}</p>
        </div>
        {info?.map((it) => (
          <ul>
            <li>{it.title}</li>
            <li>{it.description}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
