"use client";
import { Breadcrumbs } from "@/shared/components";
import React, { useEffect, useState } from "react";
import { Map } from "./components";

import styles from "./index.module.scss";
import { distributorApi } from "@/shared/api/distributor";
import { useTranslation } from "react-i18next";
import { getTranslate } from "@/shared/helpers";

export default function Distribution() {
  const { i18n } = useTranslation();
  const [key, setKey] = useState("ki");
  const [data, setData] = useState<any>(null);
  const load = async () => {
    try {
      const { data } = await distributorApi.getDistributor(key);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    load();
  }, [key]);
  return (
    <>
      <Breadcrumbs />
      <section>
        <div className="container">
          <div className={styles.flex}>
            <div className={styles.detail}>
              <div className="sectionTitle">
                <h2>
                  {getTranslate<any>(data?.translations, i18n.language)?.name ||
                    "Дистрибютора не знайдено"}
                </h2>
              </div>
              <div className={styles.contact}>
                <h3>Контакти</h3>
                <ul
                  dangerouslySetInnerHTML={{
                    __html: getTranslate<any>(data?.translations, i18n.language)
                      ?.description,
                  }}
                ></ul>
              </div>
            </div>
            <div className={styles.mapWrapper}>
              <Map setKey={(id: string) => setKey(id)} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
