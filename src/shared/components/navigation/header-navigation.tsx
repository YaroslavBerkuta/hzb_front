"use client";

import { menuConfig } from "@/shared/config";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { HeaderLink } from "./header-link";
import { useAppContext } from "@/shared/providers";
import { it } from "node:test";

export const HeaderNavigation = () => {
  const [active, setActive] = useState<string | null>();

  const { setActiveMenuKey } = useAppContext();

  const linkStyle = useCallback(
    (key: string) =>
      key === active ? `${styles.link} ${styles.active_link}` : styles.link,
    [active]
  );

  const onClick = (key: string) => {
    if (active == key) {
      setActiveMenuKey(null);
    } else {
      setActive(key);
      setActiveMenuKey(key);
    }
  };

  const onMouseEnter = (key: string) => {
    setActive(key);
    setActiveMenuKey(key);
  }

  const onMouseLeave = () => {
    setActive(null);
  }

  return (
    <nav>
      <ul className={styles.menu}>
        {menuConfig().map((it) => {
          return (
            <HeaderLink
              key={it.key}
              it={it}
              className={linkStyle}
              onClick={onClick}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          );
        })}
      </ul>
    </nav>
  );
};
