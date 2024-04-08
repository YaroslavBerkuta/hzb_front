"use client";
import Link from "next/link";
import React, {
  FC,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import Image from "next/image";
import { HeaderContact, HeaderNavigation } from "../navigation";
import styles from "./index.module.scss";
import { MenuMobil } from "./menu-mobil";

interface IProps {}

const getWindowWidth = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth;
  }
  return 1620;
};

export const HeaderTop: FC<IProps & { setIsMenuVisible: (isVisible: boolean) => void }> = ({ setIsMenuVisible }) => {
  const [width, setWidth] = useState(getWindowWidth());

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(getWindowWidth());
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
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
    <div className={styles.header_top} onMouseEnter={() => setIsMenuVisible(true)}>
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
