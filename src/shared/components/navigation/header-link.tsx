import { IHeaderMenu } from "@/shared/config";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface IProps {
  it: IHeaderMenu;
  className: (key?: any) => any;
  onClick: (key?: any) => any;
  query?: any;
}

export const HeaderLink: FC<IProps> = ({ it, className, onClick, query }) => {
  return it.link ? (
    <Link
      href={{
        pathname: it.link,
        query,
      }}
      key={it.key}
      className={className(it.key)}
      onClick={() => onClick(it.key)}
    >
      {it.image && (
        <Image src={it.image} width={72} height={72} alt={it.label} />
      )}
      {it.label}
    </Link>
  ) : (
    <li className={className(it.key)} onClick={() => onClick(it.key)}>
      {it.image && (
        <Image src={it.image} width={72} height={72} alt={it.label} />
      )}
      {it.label}
    </li>
  );
};
