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
          link: "/",
          image: "/zb.svg",
        },
        {
          label: "Бетони та розчини",
          key: "beton",
          link: "/",
          image: "/beton.svg",
        },
        {
          label: "Столярні вироби",
          key: "stolar",
          link: "/",
          image: "/stolar.svg",
        },
        {
          label: "3D Моделі",
          key: "3d",
          link: "/",
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
          label: "НОВИНИ",
          key: "news",
          link: "/about/news",
          image: "/news.svg",
        },
        {
          label: "Виробничі потужності",
          key: "power",
          link: "/about/power",
          image: "/power.svg",
        },
        {
          label: "Випробувальна лабораторія",
          key: "labaratory",
          link: "/about/labaratory",
          image: "/labaratory.svg",
        },
        {
          label: "Система управління якістю",
          key: "system",
          link: "/about/system",
          image: "/system.svg",
        },
        {
          label: "Реалізовані проекти",
          key: "project",
          link: "/about/project",
          image: "/project.svg",
        },
        {
          label: "Нагороди",
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
          label: "Основні",
          key: "contacts",
          link: "/contacts/main",
          image: "/contacts.svg",
        },
        {
          label: "Дистриб’ютори",
          key: "distribution",
          link: "/contacts/distribution",
          image: "/distribution.svg",
        },
      ],
    },
  ];
};
