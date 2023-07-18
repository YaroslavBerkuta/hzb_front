import React, { FC } from "react";
import styles from "./index.module.scss";
import { HeaderTop } from "./header-top";
import { HeaderBottom } from "./header-bottom";

interface IProps {}

export const Header: FC<IProps> = ({}) => {
  return (
    <header className={styles.header}>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};
