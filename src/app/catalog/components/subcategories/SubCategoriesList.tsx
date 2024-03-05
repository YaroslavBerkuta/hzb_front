"use client";

import React, { FC } from "react";
import styles from "./index.module.scss";
import { SubCategoriesItem } from "./SubCategoriesItem";
import { CatalogTypes } from "@/shared/types";
import { getTranslate } from "@/shared/helpers";
import { useCatalogCategoty } from "../../hooks";
import { useTranslation } from "react-i18next";

interface IProps {
  parentCat: CatalogTypes;
  setCat: (par: any) => void;
  active?: string | undefined;
}

export const SubCategoriesList: FC<IProps> = ({
  parentCat,
  setCat,
  active,
}) => {
  const { sub, setActive } = useCatalogCategoty(parentCat || "");
  const { i18n } = useTranslation();

  const setSubCat = (key: string) => {
    setActive(key);
    setCat({ categoryKey: key });
  };

  return (
    <div className={styles.flex}>
      {sub?.map((it: any) => {
        return (
          <SubCategoriesItem
            key={it?.id}
            onSelect={() => setSubCat(it?.key)}
            isActive={it?.key === active ? true : false}
            bg={it.cover[0]?.fileUrl}
            name={getTranslate<any>(it?.translations, i18n.language)?.name}
          />
        );
      })}
    </div>
  );
};
