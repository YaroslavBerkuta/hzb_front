import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./index.module.scss";

interface IProps {
  url: string;
}

export const InstagramPost: FC<IProps> = ({ url }) => {
  return (
    <Link href="" className={styles.item}>
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
