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
                Товариство з додатковою відповідальністю «Хмельницькзалізобетон»
                засноване у 1956 році. За час свого існування з матеріалів
                заводу збудовано безліч житлових будинків, фабрик, заводів,
                вокзалів, ринків, дитсадків, шкіл, інститутів, кінотеатрів,
                об&#39;єктів агропромислового та енергетичного призначення тощо.
                <br />
              </p>
              <p>
                <br />
                Новим етапом розвитку підприємства стало впровадження у 2008
                році, екструдерної технології з виготовлення
                попередньо-напружених плит перекриття, фінської компанії
                «Elematic».
              </p>
              <p>
                <br />
                Продовженням технологічного переоснащення виробничих потужностей
                було впровадження у 2013 році лінію німецької фірми «Weiler» по
                виготовленню залізобетонних попередньо-напружених паль та
                перемичок.
              </p>
              <p>
                <br /> У 2017 році було укладено контракт з австрійською
                компанією DELTABLOC на виготовлення дорожніх обмежувачів, які
                уже користуються попитом у автодорожньому будівництві країни.{" "}
              </p>
              <p>
                <br /> Протягом 2018-2021 років на підприємстві проводилася
                активна робота по розширенню номенклатури виробів для
                будівництва та ремонту доріг, а у 2021 році побудовано і введено
                в експлуатацію новий виробничий корпус по виробництву дорожніх
                елементів для задоволення потреб дорожнього будівництва.
              </p>
              <p>
                <br /> Впровадження новітніх технологій дозволяє не тільки
                випускати бетонні та залізобетонні вироби будь-якої конфігурації
                і форми, але і постійно розширювати асортимент задовольняючи
                нові потреби ринку.{" "}
              </p>
              <p>
                <br /> На сьогоднішній день ТДВ «Хмельницькзалізобетон» є одним
                з лідерів будівельної галузі України, яке спеціалізується на
                виробництві продукції для житлового та дорожнього будівництва,
                інженерних та електричних мереж, виробництві бетонів, розчинів
                та столярних виробів.
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
