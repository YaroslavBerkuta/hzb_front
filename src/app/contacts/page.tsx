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
      <section
        style={{
          padding: "0 0 100px 0",
          background: "no-repeat center/cover url(/contactBg.png)",
        }}
      >
        <Breadcrumbs color="white" />

        <div className="container">
          <div className={styles.form}>
            <span>{t("form.subtitle")}</span>
            <p>{t("form.title")}</p>

            <div className={styles.main}>
              <label>
                <span>{t("form.name")}</span>
                <input
                  type="text"
                  name="name"
                  defaultValue={data.name}
                  onChange={(e) => onChange(e.target.value, e.target.name)}
                />
              </label>
              <label>
                <span>{t("form.surname")}</span>
                <input
                  type="text"
                  name="surname"
                  defaultValue={data.surname}
                  onChange={(e) => onChange(e.target.value, e.target.name)}
                />
              </label>
              <label>
                <span>{t("form.email")}</span>
                <input
                  type="email"
                  name="email"
                  defaultValue={data.email}
                  onChange={(e) => onChange(e.target.value, e.target.name)}
                />
              </label>
              <label>
                <span>{t("form.phone")}</span>
                <input
                  type="tel"
                  name="phone"
                  defaultValue={data.phone}
                  onChange={(e) => onChange(e.target.value, e.target.name)}
                />
              </label>
              <label>
                <span>{t("form.comment")}</span>
                <textarea
                  name="comment"
                  id=""
                  defaultValue={data.comment}
                  onChange={(e) => onChange(e.target.value, e.target.name)}
                ></textarea>
              </label>
            </div>
            <ButtonWhite
              onClick={() => handleSubmit()}
              text={t("shared.element.btnOrange")}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="sectionTitle">
            <h2>Дистрибʼютори</h2>
          </div>
          <div className={map.flex}>
            <div className={map.detail}>
              <div className="sectionTitle">
                <h2>
                  {getTranslate<any>(dataMap?.translations, i18n.language)
                    ?.name || "Дистрибютора не знайдено"}
                </h2>
              </div>
              <div className={map.contact}>
                <h3>Контакти</h3>
                <ul
                  dangerouslySetInnerHTML={{
                    __html: getTranslate<any>(
                      dataMap?.translations,
                      i18n.language
                    )?.description,
                  }}
                ></ul>
              </div>
            </div>
            <div className={map.mapWrapper}>
              <Map setKey={(id: string) => setKey(id)} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.flex}>
            <div>
              <div className="sectionTitle">
                <h2>{t("shared.sectionTitle.adress")}</h2>
              </div>
              <ul className={styles.contact}>
                <li>
                  <span>Адреса:</span>
                  <p>Україна, 29000, м. Хмельницький, віл. Чорновола, 31</p>
                </li>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>+380977262832</p>
                </li>
                <li>
                  <span>{t("shared.element.email")}:</span>
                  <p>xmbeton@gmail.com</p>
                </li>
                <li>
                  <span>{t("shared.element.reception")}:</span>
                  <p>(0382)644396, (0382)644358</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="sectionTitle">
                <h2>{t("shared.sectionTitle.labolatory")}</h2>
              </div>
              <ul className={styles.contact}>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>(0382)643205, +380978639352</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="sectionTitle">
                <h2>{t("shared.sectionTitle.zbut")}</h2>
              </div>
              <ul className={styles.contact}>
                <span>Залізобетонні вироби</span>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>
                    (0382)643025, (0382)643603, +380969176074, +380988671678
                  </p>
                </li>
                <span>Сергій</span>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>+380969176074</p>
                </li>
                <li>
                  <span>{t("shared.element.email")}:</span>
                  <p>s_hzb@ukr.net</p>
                </li>
                <span>Марина</span>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>+380988671678</p>
                </li>
                <li>
                  <span>{t("shared.element.email")}:</span>
                  <p>mhzb.zbut@gmail.com</p>
                </li>
                <span>Вячеслав</span>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>+380674950275</p>
                </li>
                <li>
                  <span>{t("shared.element.email")}:</span>
                  <p>v-hzb@ukr.net</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="sectionTitle">
                <h2>{t("shared.sectionTitle.production")}</h2>
              </div>
              <ul className={styles.contact}>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>(0382)644355, +380673113632</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="sectionTitle">
                <h2>{t("shared.sectionTitle.supply")}</h2>
              </div>
              <ul className={styles.contact}>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>(0382)645300, +380964529572, +380977013673</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="sectionTitle">
                <h2>{t("shared.sectionTitle.accounting")}</h2>
              </div>
              <ul className={styles.contact}>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>(0382)644369, +380975401087, +380974890838</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="sectionTitle">
                <h2>{t("shared.sectionTitle.concrete")}</h2>
              </div>
              <ul className={styles.contact}>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>
                    (0382)645262, +380967875437, +380985060240, +380673811183
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <div className="sectionTitle">
                <h2>{t("shared.sectionTitle.tree")}</h2>
              </div>
              <ul className={styles.contact}>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>(0382)645136, +380987377278</p>
                </li>
                <li>
                  <span>{t("shared.element.email")}:</span>
                  <p>zbuthzb.st@gmail.com</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="sectionTitle">
                <h2>ЗАСТУПНИК КЕРІВНИКА ВІДДІЛУ ЗБУТУ</h2>
              </div>
              <ul className={styles.contact}>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>+380674950275</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="sectionTitle">
                <h2>КЕРІВНИК ВІДДІЛУ ЗБУТУ</h2>
              </div>
              <ul className={styles.contact}>
                <li>
                  <span>{t("shared.element.phone")}:</span>
                  <p>+380672772202</p>
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
