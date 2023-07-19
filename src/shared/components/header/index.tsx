"use client";
import React, { FC, useEffect } from "react";
import styles from "./index.module.scss";
import { HeaderTop } from "./header-top";
import { HeaderBottom } from "./header-bottom";
import { getStorage } from "@/shared/services";
import i18next from "i18next";
import "@/i18n";

interface IProps {}

export const Header: FC<IProps> = ({}) => {
  const detecLang = () => {
    const language = getStorage("lang");
    if (language) {
      return i18next.changeLanguage(language);
    }
    return i18next.changeLanguage("ua");
  };
  useEffect(() => {
    detecLang();
  }, []);
  return (
    <header className={styles.header}>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};
