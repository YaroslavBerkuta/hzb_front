"use client";
import { Advantages, Breadcrumbs, Clients } from "@/shared/components";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import styles from "./index.module.scss";

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <Breadcrumbs />
      <section>
        <div className="container">
          <div className="sectionTitle">
            <h2>{t("shared.sectionTitle.about")}</h2>
          </div>
          <div className={styles.flex}>
            <div className={styles.image}>
              <Image src="/about.png" alt="about image" layout="fill" />
            </div>
            <div className={styles.desc}>
              <div className="sectionTitle">
                <h2>{t("shared.sectionTitle.history")}</h2>
              </div>
              <p>
                {t("about.el1")}
                <br />
              </p>
              <p>
                <br />
                {t("about.el2")}
              </p>
              <p>
                <br />
                {t("about.el3")}
              </p>
              <p>
                <br />
                {t("about.el4")}{" "}
              </p>
              <p>
                <br />
                {t("about.el5")}
              </p>
              <p>
                <br />
                {t("about.el6")}{" "}
              </p>
              <p>
                <br />
                {t("about.el7")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="sectionTitle">
            <h2>{t("shared.sectionTitle.advantages")}</h2>
          </div>
          <Advantages />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="sectionTitle">
            <h2>{t("shared.sectionTitle.clients")}</h2>
          </div>
          <Clients />
        </div>
      </section>
    </>
  );
}
