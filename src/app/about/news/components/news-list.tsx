"use client";
import React from "react";
import styles from "../index.module.scss";
import { NewsItem } from "./news-item";
import { getList } from "../../../../shared/api/news/index";
import { useFlatList } from "../../../../shared/hook/use-flat-list.hook";
import { getTranslate } from "@/shared/helpers";
import { useTranslation } from "react-i18next";

export const NewsList = () => {
  const { i18n } = useTranslation();
  const { items } = useFlatList({
    fetchItems: getList,
    needInit: true,
    loadParams: {},
  });

  return (
    <div className={styles.flex}>
      {items?.map((it: any) => (
        <NewsItem
          key={it.id}
          title={getTranslate<any>(it.translations, i18n.language)?.name}
          desc={getTranslate<any>(it.translations, i18n.language)?.description}
          img={it?.cover?.length ? it.cover[0].fileUrl : ""}
          create={new Date(it.createdAt).toLocaleDateString(i18n.language, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        />
      ))}
    </div>
  );
};
