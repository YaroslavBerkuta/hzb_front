"use client";

import { useTranslation } from "react-i18next";

export const advantages = () => {
  const { t } = useTranslation();
  return [
    {
      image: "/experience.svg",
      title: t("advantage.experience.title"),
      description: t("advantage.experience.desc"),
    },
    {
      image: "/iso.svg",
      title: t("advantage.quality.title"),
      description: t("advantage.quality.desc"),
    },
    {
      image: "/awards.svg",
      title: t("advantage.chain.title"),
      description: t("advantage.chain.desc"),
    },
    {
      image: "/power.svg",
      title: t("advantage.largest.title"),
      description: t("advantage.largest.desc"),
    },
  ];
};
