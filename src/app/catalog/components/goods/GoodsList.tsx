"use client";
import React, { FC } from "react";
import { GoodsItem } from "./GoodsItem";

import styles from "./index.module.scss";
import { Pagination, Select } from "antd";

interface IProps {
  items: any[];
  count: number;
  setParams: (par: any) => void;
}

export const GoodsList: FC<IProps> = ({ items, count, setParams }) => {
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
          <GoodsItem key={it.id} />
        ))}
      </div>
      <Pagination
        defaultCurrent={1}
        total={count}
        className={styles.pagination}
      />
    </div>
  );
};
