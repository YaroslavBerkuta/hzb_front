import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./index.module.scss";

interface IProps {
  url: string;
  link: string;
}

export const InstagramPost: FC<IProps> = ({ url, link }) => {
  return (
    <Link href={link} className={styles.item} target="_blank">
      <Image
        src={url}
        alt="post"
        loading="lazy"
        layout="fill"
        objectFit="cover"
      />
    </Link>
  );
};
