import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./index.module.scss";

export const Clients = () => {
  return (
    <div className={styles.flex}>
      <Link href="" className={styles.item}>
        <Image
          src="/client.png"
          alt="client"
          loading="lazy"
          layout="fill"
          objectFit="contain"
        />
      </Link>
      <Link href="" className={styles.item}>
        <Image
          src="/client.png"
          alt="client"
          loading="lazy"
          layout="fill"
          objectFit="contain"
        />
      </Link>
      <Link href="" className={styles.item}>
        <Image
          src="/client.png"
          alt="client"
          loading="lazy"
          layout="fill"
          objectFit="contain"
        />
      </Link>
      <Link href="" className={styles.item}>
        <Image
          src="/client.png"
          alt="client"
          loading="lazy"
          layout="fill"
          objectFit="contain"
        />
      </Link>
      <Link href="" className={styles.item}>
        <Image
          src="/client.png"
          alt="client"
          loading="lazy"
          layout="fill"
          objectFit="contain"
        />
      </Link>
      <Link href="" className={styles.item}>
        <Image
          src="/client.png"
          alt="client"
          loading="lazy"
          layout="fill"
          objectFit="contain"
        />
      </Link>
    </div>
  );
};
