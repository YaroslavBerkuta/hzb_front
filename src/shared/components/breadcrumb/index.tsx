"use client";
import React, { FC, useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { useRouter, usePathname } from "next/navigation";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";

export const Breadcrumbs: FC<{ color?: string; children?: any }> = ({
  color,
  children,
}) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<ItemType[] | null>(null);
  useEffect(() => {
    if (router) {
      const linkPath = pathname.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        let href = "/" + linkPath.slice(0, i + 1).join("/");
        if (path === 'catalog' && i === 0) {
          href += "?parent=rcp";
        }
        return {
          title: t(`bread.${path}`),
          href: href,
          key: path,
        };
      });
      setBreadcrumbs([
        {
          title: t(`bread.home`),
          href: "/",
          className: styles.item,
          key: "home",
        },
        ...pathArray,
      ]);
    }
  }, [router, i18n.language]);

  if (!breadcrumbs) {
    return <></>;
  }
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <Breadcrumb
            className={styles.flex}
            items={breadcrumbs.map((it: ItemType, index: number) => ({
              key: it.key,
              title: it.title,
              href: it.href,
              className: color ? styles.itemWhite : styles.item,
            }))}
          />
          {children}
        </div>
      </div>
    </section>
  );
};
