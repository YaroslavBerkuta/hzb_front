"use client";

import { Breadcrumbs } from "@/shared/components";
import React from "react";
import { PowerList } from "./components/power-list";
import { useTranslation } from "react-i18next";

export default function Power() {
  const { t } = useTranslation();
  return (
    <>
      <Breadcrumbs />
      <section>
        <div className="container">
          <div className="sectionTitle">
            <h2>{t("power.title")}</h2>
            <p>{t("power.desc")}</p>
          </div>
          <PowerList />
          <div className="sectionTitle">
            <p>{t("power.subDesc")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
