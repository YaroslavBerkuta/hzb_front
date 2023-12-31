"use client";
import { projectApi } from "@/shared/api/project";
import { useFlatList } from "@/shared/hook";
import React from "react";
import { ProjectItems } from "./project-items";
import { useTranslation } from "react-i18next";
import { getTranslate } from "@/shared/helpers";

export const ProjectList = () => {
  const { items } = useFlatList({
    fetchItems: projectApi.getList,
    needInit: true,
  });
  const { i18n } = useTranslation();
  return (
    <div>
      {items?.map((it: any) => (
        <ProjectItems
          key={it.id}
          title={getTranslate<any>(it.translations, i18n.language)?.name}
          desc={getTranslate<any>(it.translations, i18n.language)?.description}
          image={it.cover[0].fileUrl}
        />
      ))}
    </div>
  );
};
