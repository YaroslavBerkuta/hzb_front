"use client";
import React, { FC, useMemo } from "react";
import { GoodsItem } from "./GoodsItem";

import styles from "./index.module.scss";
import { Pagination, Select } from "antd";
import { Lang, getTranslate } from "@/shared/helpers";
import { useTranslation } from "react-i18next";

interface IProps {
  items: any[];
  count: number;
  setParams: (par: any) => void;
  page: number;
}

export const GoodsList: FC<IProps> = ({ items, count, setParams, page }) => {
  const { i18n } = useTranslation();

  const renderSelect = useMemo(() => {
    return (
      <Select
        className={styles.sort}
        placeholder={i18n.language === Lang.UA ? "Сортувати за" : "Sort by"}
        onChange={(val) => setParams({ sort: val })}
        options={[
          {
            value: "ASC",
            label:
              i18n.language === Lang.UA
                ? "По алфавіту від А - Я"
                : "Alphabetically from A to Z",
          },
          {
            value: "DESC",
            label:
              i18n.language === Lang.UA
                ? "По алфавіту від Я - A"
                : "Alphabetically from Z to A",
          },
        ]}
      />
    );
  }, [i18n.language]);

  
  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <span>
          {i18n.language === Lang.UA ? "Показано" : "Showing "} {items?.length}{" "}
          {i18n.language === Lang.UA ? "з" : "of "} {count}{" "}
          {i18n.language === Lang.UA ? "товарів" : "products "}
        </span>
        {renderSelect}
      </div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder={i18n.language === Lang.UA ? "Пошук" : "Search"}
          onChange={(e) => setParams({ searchString: e.target.value })}
        />
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8467 12.6124L8.25849 8.07028C10.3153 5.41416 9.09572 0.578313 4.61296 0.5C-1.53765 0.604418 -1.53765 9.66265 4.61296 9.76707C5.79298 9.74749 6.74886 9.39508 7.47401 8.84036L12.1018 13.3499C12.2073 13.4478 12.3457 13.5 12.4776 13.5C12.6094 13.5 12.7478 13.4478 12.8467 13.3499C13.0511 13.1476 13.0511 12.8148 12.8467 12.6124ZM4.61296 1.54418C9.37918 1.62249 9.37918 8.64458 4.61296 8.72289C-0.153271 8.63805 -0.146678 1.62902 4.61296 1.54418Z"
            fill="#7F7F7F"
          />
        </svg>
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
            lang={i18n.language}
          />
        ))}
      </div>
      <Pagination
        defaultCurrent={1}
        current={page}
        pageSize={20}
        total={count}
        className={styles.pagination}
        onChange={(page) => setParams({ page })}
      />
    </div>
  );
};
