"use client";
import React, { FC } from "react";
import { GoodsItem } from "./GoodsItem";

import styles from "./index.module.scss";
import { Pagination, Select } from "antd";
import { getTranslate } from "@/shared/helpers";
import { useTranslation } from "react-i18next";

interface IProps {
  items: any[];
  count: number;
  setParams: (par: any) => void;
}

export const GoodsList: FC<IProps> = ({ items, count, setParams }) => {
  const { i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <span>
          Показано {items?.length} з {count} товарів
        </span>
        <Select
          defaultValue="Сортувати за"
          className={styles.sort}
          onChange={(val) => setParams({ sort: val })}
          options={[
            { value: "ASC", label: "По алфавіту від А - Я" },
            { value: "DESC", label: "По алфавіту від Я - A" },
          ]}
        />
      </div>
      <div className={styles.flex}>
        {items?.map((it: any) => (
          <GoodsItem
            key={it.id}
            id={it.id}
            name={getTranslate<any>(it?.translations, i18n.language)?.name}
            image={it?.cover[0]?.fileUrl}
            atribute={
              getTranslate<any>(it?.translations, i18n.language)?.previewHtml
            }
          />
        ))}
      </div>
      <Pagination
        defaultCurrent={1}
        pageSize={20}
        total={count}
        className={styles.pagination}
        onChange={(page) => setParams({ page })}
      />
    </div>
  );
};
