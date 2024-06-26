"use client";
import { menuConfig } from "@/shared/config";
import { useAppContext } from "@/shared/providers";
import { find } from "lodash";
import React, { useMemo } from "react";
import styles from "./index.module.scss";
import { HeaderLink } from "../navigation/header-link";

interface IHeaderBottomProps {
  setIsMenuVisible: (isVisible: boolean) => void;
}

export const HeaderBottom: React.FC<IHeaderBottomProps> = ({ setIsMenuVisible }) => {
  const { activeMenuKey, setActiveMenuKey } = useAppContext();
  const menu = menuConfig();

  const handleMouseLeave = () => {
    setActiveMenuKey(null);
  };

  const renderItem = useMemo(() => {
    const item = find(menu, { key: activeMenuKey });
    if (item) {
      return (
        <div className={styles.header_bottom} onMouseLeave={handleMouseLeave}>
          <div className="container">
            <ul>
              {item?.children?.map((it) => (
                <HeaderLink
                  key={it.key}
                  it={it}
                  className={() => {}}
                  onClick={() => setActiveMenuKey(null)}
                  onMouseEnter={() => setActiveMenuKey(null)}
                  onMouseLeave={() => setActiveMenuKey(null)}
                  query={it.query}
                />
              ))}
            </ul>
          </div>
        </div>
      );
    }
    return <></>;
  }, [activeMenuKey, handleMouseLeave]);
  return renderItem;
};
