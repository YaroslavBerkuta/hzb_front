"use client";

import { IMainFormData } from "@/shared/api/form";
import { Breadcrumbs, ButtonWhite } from "@/shared/components";
import { sendForm } from "@/shared/services/domain/mail.service";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Map } from "./distribution/components";

import styles from "./index.module.scss";
import map from "./distribution/index.module.scss";
import { getTranslate } from "@/shared/helpers";
import { distributorApi } from "@/shared/api/distributor";
import Image from "next/image";

export default function Contacts() {
  const [key, setKey] = useState("va");
  const [dataMap, setDataMap] = useState<any>(null);
  const load = async () => {
    try {
      const { data } = await distributorApi.getDistributor(key);
      setDataMap(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    load();
  }, [key]);
  const { t, i18n } = useTranslation();
  const [data, setData] = useState<IMainFormData>({
    name: "",
    surname: "",
    phone: "",
    email: "",
    comment: "",
  });
  const handleSubmit = async () => {
    try {
      await sendForm(data);
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (val: string, key: string) => {
    setData((prev) => ({ ...prev, [key]: val }));
  };
  return (
    <>
      <section>
        <Breadcrumbs />
      </section>
      <section>
        <div className="container">
          <div className={styles.flex}>
            <div>
              <div className="sectionTitle">
                <h2>Приймальня</h2>
              </div>
              <ul className={styles.contact}>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>(0382)644396 (0382)644358</p>
                </li>
                <li>
                  <span>{t("shared.element.email")}:</span>
                  <p>xmbeton@gmail.com</p>
                </li>
              </ul>
              <ul className={styles.contact}>
                <div className="sectionTitle">
                  <h2>Бухгалтерія</h2>
                </div>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>+380975401087 +380974890838 (0382)644369 </p>
                </li>
                <li>
                  <span>{t("shared.element.email")}:</span>
                  <p>xmbeton@gmail.com</p>
                </li>
              </ul>
              <ul className={styles.contact}>
                <div className="sectionTitle">
                  <h2>ВІДДІЛ ПОСТАЧАННЯ</h2>
                </div>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>+380964529572  +380977013673 (0382)645300 </p>
                </li>
                <li>
                  <span>{t("shared.element.email")}:</span>
                  <p>dimad9441@gmail.com</p>
                </li>
              </ul>
              <ul className={styles.contact}>
                <div className="sectionTitle">
                  <h2>Випробувальна лабораторія</h2>
                </div>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>+380978639352 (0382)643205</p>
                </li>
                <li>
                  <span>{t("shared.element.email")}:</span>
                  <p>labhzb@ukr.net</p>
                </li>
              </ul>
              <ul className={styles.contact}>
                <div className="sectionTitle">
                  <h2>Виробничий відділ</h2>
                </div>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>+380673113632 (0382)644355</p>
                </li>
                <li>
                  <span>{t("shared.element.email")}:</span>
                  <p>smolicigor1@gmail.com</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="sectionTitle">
                <h2>Відділ збуту</h2>
              </div>
              <ul className={styles.contact}>
                <p>ЗАЛІЗОБЕТОНІ ВИРОБИ</p>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>+380969176074 +380988671678 (0382)643025 (0382)643603</p>
                </li>
                <li>
                  <span>{t("shared.element.email")}:</span>
                  <p>skhzb.zbut@gmail.com</p>
                </li>
              </ul>
              <ul className={styles.contact}>
                <p>БЕТОНИ ТА РОЗЧИНИ</p>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>+380967875437 +380985060240 +380673811183 (0382)645262 </p>
                </li>
                <li>
                  <span>{t("shared.element.email")}:</span>
                  <p>a-hzb@ukr.net</p>
                </li>
              </ul>
              <ul className={styles.contact}>
                <p>ВИРОБИ З ДЕРЕВИНИ</p>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>+380987377278 (0382)645136 </p>
                </li>
                <li>
                  <span>{t("shared.element.email")}:</span>
                  <p>zbuthzb.st@gmail.com</p>
                </li>
              </ul>
              <ul className={styles.contact}>
                <p>ЗАСТУПНИК КЕРІВНИКА ВІДДІЛУ ЗБУТУ</p>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>+380674950275 </p>
                </li>
                <li>
                  <span>{t("shared.element.email")}:</span>
                  <p>v-hzb@ukr.net</p>
                </li>
              </ul>
              <ul className={styles.contact}>
                <p>КЕРІВНИК ВІДДІЛУ ЗБУТУ</p>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>+380672772202 </p>
                </li>
                <li>
                  <span>{t("shared.element.email")}:</span>
                  <p>s_hzb@ukr.net</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.map}>
            <Image src="/map.png" alt="map" layout="fill" />
          </div>
        </div>
      </section>
    </>
  );
}
