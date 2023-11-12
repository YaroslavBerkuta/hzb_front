"use client";
import { labolatoryApi } from "@/shared/api/labolatoty";
import { useFlatList } from "@/shared/hook";
import React from "react";
import { useTranslation } from "react-i18next";

import styles from "../index.module.scss";
import { LabolatoryItem } from "./labolatory-item";
import { getTranslate } from "@/shared/helpers";

export const LabolatoryList = () => {
  const { items } = useFlatList<any>({
    fetchItems: labolatoryApi.getList,
    needInit: true,
  });
  const { i18n } = useTranslation();
  return (
    <div className={styles.flex}>
      {items?.map((it: any) => (
        <LabolatoryItem
          key={it.id}
          title={getTranslate<any>(it.translations, i18n.language)?.name}
          description={
            getTranslate<any>(it.translations, i18n.language)?.description
          }
          images={it.cover}
        />
      ))}
    </div>
  );
};
