"use client";
import Link from "next/link";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { HeaderContact, HeaderNavigation } from "../navigation";
import styles from "./index.module.scss";
import { MenuMobil } from "./menu-mobil";

interface IProps {}

export const HeaderTop: FC<IProps> = ({}) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const renderMenu = useMemo(() => {
    if (width > 768) {
      return (
        <>
          <HeaderNavigation />
          <HeaderContact />
        </>
      );
    } else {
      return (
        <>
          <HeaderContact />
          <MenuMobil />
        </>
      );
    }
  }, [width]);
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
          {renderMenu}
        </div>
      </div>
    </div>
  );
};
