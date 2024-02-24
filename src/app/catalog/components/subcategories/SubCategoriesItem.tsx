"use client";
import React, { FC } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import Image from "next/image";

interface IProps {
  name: string;
  onSelect: () => void;
  isActive: boolean;
  bg: string;
}

export const SubCategoriesItem: FC<IProps> = ({
  name,
  onSelect,
  isActive,
  bg,
}) => {
  return (
    <div
      className={classNames(styles.item, { [styles.itemActive]: isActive })}
      onClick={onSelect}
    >
      <Image src={bg} layout="fill" alt={name} />
      <p>{name}</p>
    </div>
  );
};
