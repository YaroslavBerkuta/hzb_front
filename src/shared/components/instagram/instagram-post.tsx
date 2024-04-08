import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./index.module.scss";

interface IProps {
  imageUrl: string;
  postUrl: string;
}

export const InstagramPost: FC<IProps> = ({ imageUrl, postUrl }) => {
  return (
    <Link href={postUrl} className={styles.item} target="_blank">
      <Image
        src={imageUrl}
        alt="post"
        loading="lazy"
        layout="fill"
        objectFit="cover"
      />
    </Link>
  );
};
