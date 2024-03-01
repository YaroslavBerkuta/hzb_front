"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";
import { menuConfig } from "@/shared/config";
import Link from "next/link";

export const MenuMobil = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={styles.burger} onClick={() => setActive(!active)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={
          !active ? styles.menu : `${styles.menu} ${styles.menuActive}`
        }
      >
        <ul>
          {menuConfig().map((it, index) => (
            <div key={index}>
              <p>{it.label}</p>
              {it.children?.map((el, index) => (
                <li key={index} onClick={() => setActive(false)}>
                  <Link
                    href={{
                      pathname: el.link,
                      query: el.query,
                    }}
                  >
                    {el.label}
                  </Link>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
