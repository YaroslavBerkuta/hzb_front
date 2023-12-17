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
      <section>
        <Breadcrumbs />
      </section>
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
                Хмельницький залізобетонний завод був заснований у 1966 році.
                Завод був побудований для забезпечення потреб будівництва в
                залізобетонних виробах. Перша продукція заводу була випущена в
                1967 році. Зараз завод продовжуває розвиватися та впроваджувати
                інновації. Завод почав випускати нову продукцію, яка відповідала
                міжнародним стандартам якості. Сьогодні Хмельницький
                залізобетонний завод є одним з провідних виробників
                залізобетонних виробів в Україні. Завод виробляє широкий спектр
                продукції, яка відповідає найвищим стандартам якості.
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
