"use client";
import { useTranslation } from "react-i18next";

export interface IHeaderMenu {
  label: string;
  key: string;
  link: string | null;
  children?: {
    label: string;
    key: string;
    link: string;
    image?: string;
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
        },
        {
          label: "Бетони та розчини",
          key: "beton",
          link: "/catalog",
          image: "/beton.svg",
        },
        {
          label: "Столярні вироби",
          key: "stolar",
          link: "/catalog",
          image: "/stolar.svg",
        },
        {
          label: "3D Моделі",
          key: "3d",
          link: "/catalog",
          image: "/3d.svg",
        },
      ],
    },
    {
      label: t("nav.about.label"),
      key: "about",
      link: null,
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
      link: null,
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
