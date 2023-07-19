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
        <div className={styles.info}>
          <h3>ЕПІЦЕНТР</h3>
          <p>
            Лідер у сегменті роздрібної торгівлі товарами для дому та ремонту на
            ринку.
          </p>
        </div>
      </Link>
      <Link href="" className={styles.item}>
        <Image
          src="/client.png"
          alt="client"
          loading="lazy"
          layout="fill"
          objectFit="contain"
        />
        <div className={styles.info}>
          <h3>ЕПІЦЕНТР</h3>
          <p>
            Лідер у сегменті роздрібної торгівлі товарами для дому та ремонту на
            ринку.
          </p>
        </div>
      </Link>
      <Link href="" className={styles.item}>
        <Image
          src="/client.png"
          alt="client"
          loading="lazy"
          layout="fill"
          objectFit="contain"
        />
        <div className={styles.info}>
          <h3>ЕПІЦЕНТР</h3>
          <p>
            Лідер у сегменті роздрібної торгівлі товарами для дому та ремонту на
            ринку.
          </p>
        </div>
      </Link>
      <Link href="" className={styles.item}>
        <Image
          src="/client.png"
          alt="client"
          loading="lazy"
          layout="fill"
          objectFit="contain"
        />
        <div className={styles.info}>
          <h3>ЕПІЦЕНТР</h3>
          <p>
            Лідер у сегменті роздрібної торгівлі товарами для дому та ремонту на
            ринку.
          </p>
        </div>
      </Link>
      <Link href="" className={styles.item}>
        <Image
          src="/client.png"
          alt="client"
          loading="lazy"
          layout="fill"
          objectFit="contain"
        />
        <div className={styles.info}>
          <h3>ЕПІЦЕНТР</h3>
          <p>
            Лідер у сегменті роздрібної торгівлі товарами для дому та ремонту на
            ринку.
          </p>
        </div>
      </Link>
    </div>
  );
};