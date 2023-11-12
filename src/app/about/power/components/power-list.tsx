"use client";
import React from "react";

import styles from "../index.module.scss";
import { PowerItem } from "./power-item";
import { useFlatList } from "@/shared/hook";
import { productionsApi } from "@/shared/api/power";
import { getTranslate } from "@/shared/helpers";
import { useTranslation } from "react-i18next";

export const PowerList = () => {
  const { i18n } = useTranslation();
  const { items } = useFlatList<any>({
    fetchItems: productionsApi.getList,
    needInit: true,
  });
  return (
    <div className={styles.flex}>
      {items?.map((it: any) => (
        <PowerItem
          title={getTranslate<any>(it.translations, i18n.language)?.name}
          content={getTranslate<any>(it.translations, i18n.language)?.data}
          images={it.cover}
          key={it.id}
        />
      ))}
    </div>
  );
};
