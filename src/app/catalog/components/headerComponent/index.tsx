"use client";
import React, { FC } from "react";
import stylse from "./index.module.scss";
import { useTranslation } from "react-i18next";

interface IProps {
  priceLink: string;
  catalogLink: string;
}

export const HeaderComponent: FC<IProps> = ({ priceLink, catalogLink }) => {
  const { t } = useTranslation();
  return (
    <div className={stylse.flex}>
      {priceLink && (
        <a href={priceLink} target="_blank" className={stylse.priceBtn}>
          {t("shared.sectionTitle.price")}
        </a>
      )}
      {catalogLink && (
        <a href={catalogLink} target="_blank" className={stylse.catalogBtn}>
          {t("shared.sectionTitle.catalog")}
        </a>
      )}
    </div>
  );
};
