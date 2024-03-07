"use client";
import React from "react";
import { InstagramPost } from "./instagram-post";
import styles from "./index.module.scss";
import { useFlatList } from "@/shared/hook";
import { instagramList } from "@/shared/api/instagram";

export const Instagram = () => {
  const { items } = useFlatList({
    fetchItems: instagramList,
    needInit: true,
    limit: 8,
  });

  return (
    <div className={styles.flex}>
      {items?.map((it: any) => (
        <InstagramPost url={it?.cover[0]?.fileUrl} link={it?.link} />
      ))}
    </div>
  );
};
