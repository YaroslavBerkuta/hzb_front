"use client";
import React, { useEffect } from "react";
import styles from "../index.module.scss";
import { NewsItem } from "./news-item";
import { getList } from "../../../../shared/api/news/index";
import { useFlatList } from "../../../../shared/hook/use-flat-list.hook";

export const NewsList = () => {
  const list = useFlatList({
    fetchItems: getList,
    needInit: true,
  });

  return (
    <div className={styles.flex}>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  );
};
