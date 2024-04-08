import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { IHeaderMenu } from "@/shared/config";

interface IProps {
  it: IHeaderMenu;
  className: any;
  onClick: (key: string) => void;
  onMouseEnter: (key: string) => void;
  onMouseLeave: () => void;
  query?: any;
}

export const HeaderLink: FC<IProps> = ({ it, className, onClick, onMouseEnter, onMouseLeave, query }) => {
  const conditionalOnMouseEnter = () => {
    if (!it.image) {
      onMouseEnter(it.key);
    }
  };
  const conditionalOnMouseLeave = () => {
    if (!it.image) {
      onMouseLeave();
    }
  };

  return it.link ? (
    <Link
      href={{
        pathname: it.link,
        query,
      }}
      key={it.key}
      className={className(it.key)}
      onClick={() => onClick(it.key)}
      onMouseEnter={conditionalOnMouseEnter}
      onMouseLeave={conditionalOnMouseLeave}
    >
      {it.image && (
        <Image src={it.image} width={72} height={72} alt={it.label} />
      )}
      {it.label}
    </Link>
  ) : (
    <li className={className(it.key)} onMouseEnter={conditionalOnMouseEnter} onMouseLeave={conditionalOnMouseLeave}>
      {it.image && (
        <Image src={it.image} width={72} height={72} alt={it.label} />
      )}
      {it.label}
    </li>
  );
};
