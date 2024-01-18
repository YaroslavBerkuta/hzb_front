"use client";
import React, { FC } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

interface IProps {
  name: string;
  onSelect: () => void;
  isActive: boolean;
}

export const SubCategoriesItem: FC<IProps> = ({ name, onSelect, isActive }) => {
  return (
    <div
      className={classNames(styles.item, { [styles.itemActive]: isActive })}
      onClick={onSelect}
    >
      <p>{name}</p>
    </div>
  );
};
