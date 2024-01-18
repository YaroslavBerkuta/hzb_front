"use client";
import { useTranslation } from "react-i18next";
import { CatalogTypes } from "../types";

export interface IHeaderMenu {
  label: string;
  key: string;
  link: string | null;
  query?: any;
  children?: {
    label: string;
    key: string;
    link: string;
    image?: string;
    query?: any;
  }[];
  image?: string;
}

export const menuConfig = (): IHeaderMenu[] => {
  const { t } = useTranslation();
  return [
    {
      label: t("nav.catalog.label"),
      key: "catalog",
      link: null,
      children: [
        {
          label: "Залізобетонні вироби",
          key: "zb",
          link: "/catalog",
          image: "/zb.svg",
          query: { parent: CatalogTypes.RPS },
        },
        {
          label: "Бетони та розчини",
          key: "beton",
          link: "/catalog",
          image: "/beton.svg",
          query: { parent: CatalogTypes.CAM },
        },
        {
          label: "Столярні вироби",
          key: "stolar",
          link: "/catalog",
          image: "/stolar.svg",
          query: { parent: CatalogTypes.CP },
        },
        {
          label: "3D Моделі",
          key: "3d",
          link: "/catalog",
          image: "/3d.svg",
          query: { parent: CatalogTypes.DM },
        },
      ],
    },
    {
      label: t("nav.about.label"),
      key: "about",
      link: "/about",
      children: [
        {
          label: t("nav.about.el1"),
          key: "news",
          link: "/about/news",
          image: "/news.svg",
        },
        {
          label: t("nav.about.el2"),
          key: "power",
          link: "/about/power",
          image: "/power.svg",
        },
        {
          label: t("nav.about.el3"),
          key: "labaratory",
          link: "/about/labaratory",
          image: "/labaratory.svg",
        },
        {
          label: t("nav.about.el4"),
          key: "system",
          link: "/about/system",
          image: "/system.svg",
        },
        {
          label: t("nav.about.el5"),
          key: "project",
          link: "/about/project",
          image: "/project.svg",
        },
        {
          label: t("nav.about.el6"),
          key: "awards",
          link: "/about/awards",
          image: "/awards.svg",
        },
      ],
    },
    {
      label: t("nav.contact.label"),
      key: "contact",
      link: "/contacts",
      children: [
        {
          label: t("nav.contact.el1"),
          key: "contacts",
          link: "/contacts/main",
          image: "/contacts.svg",
        },
        {
          label: t("nav.contact.el2"),
          key: "distribution",
          link: "/contacts/distribution",
          image: "/distribution.svg",
        },
      ],
    },
  ];
};
