import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";
import { HeaderContact, HeaderNavigation } from "../navigation";
import styles from "./index.module.scss";

interface IProps {}

export const HeaderTop: FC<IProps> = ({}) => {
  return (
    <div className={styles.header_top}>
      <div className="container">
        <div className={styles.header_flex}>
          <Link href="/" className={styles.header_logo}>
            <Image src="/logo.svg" width={50} height={50} alt="logo" />
            <span>
              Хмельницьк
              <br />
              залізобетон
            </span>
          </Link>
          <HeaderNavigation />
          <HeaderContact />
        </div>
      </div>
    </div>
  );
};
