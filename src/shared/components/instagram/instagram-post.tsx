import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./index.module.scss"

export const InstagramPost = () => {
  return (
    <Link href="" className={styles.item}>
      <Image
        src="/client.png"
        alt=""
        loading="lazy"
        layout="fill"
        objectFit="cover"
      />
    </Link>
  );
};
