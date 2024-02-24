import React, { FC } from "react";
import stylse from "./index.module.scss";

interface IProps {
  priceLink: string;
  catalogLink: string;
}

export const HeaderComponent: FC<IProps> = ({ priceLink, catalogLink }) => {
  return (
    <div>
      {priceLink && (
        <a href={priceLink} target="_blank" className={stylse.priceBtn}>
          Ціни
        </a>
      )}
      {catalogLink && (
        <a href={catalogLink} target="_blank" className={stylse.catalogBtn}>
          Каталог залізобетоні вироби
        </a>
      )}
    </div>
  );
};
