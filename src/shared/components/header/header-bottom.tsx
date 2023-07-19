"use client";
import { menuConfig } from "@/shared/config";
import { AppStateContext } from "@/shared/providers";
import { find } from "lodash";
import React, { useContext, useMemo } from "react";
import styles from "./index.module.scss";
import { HeaderLink } from "../navigation/header-link";

export const HeaderBottom = () => {
  const { activeMenuKey } = useContext(AppStateContext);
  const menu = menuConfig();
  const renderItem = useMemo(() => {
    const item = find(menu, { key: activeMenuKey });
    if (item) {
      return (
        <div className={styles.header_bottom}>
          <div className="container">
            <ul>
              {item?.children?.map((it) => (
                <HeaderLink
                  key={it.key}
                  it={it}
                  className={() => {}}
                  onClick={() => {}}
                />
              ))}
            </ul>
          </div>
        </div>
      );
    }
    return <></>;
  }, [activeMenuKey]);
  return renderItem;
};
