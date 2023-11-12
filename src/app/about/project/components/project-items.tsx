import React, { FC } from "react";
import Image from "next/image";

import styles from "../index.module.scss";
import Link from "next/link";

interface IProps {
  title: string;
  desc: string;
  image: string;
}

export const ProjectItems: FC<IProps> = ({ title, desc, image }) => {
  return (
    <Link className={styles.item} href="project/1">
      <div className={styles.detail}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      {image && (
        <div className={styles.image}>
          <Image src={image} alt="project" width={680} height={500} />
        </div>
      )}
    </Link>
  );
};
