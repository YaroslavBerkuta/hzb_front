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
  const [key, setKey] = useState("va");
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
                  {getTranslate<any>(data?.translations, i18n.language)?.name}
                </h2>
              </div>
              <p>
                {
                  getTranslate<any>(data?.translations, i18n.language)
                    ?.description
                }
              </p>
              {/* <div className={styles.contact}>
                <h3>Контакти</h3>
                <ul>
                  <li>
                    <p>Алексієнко Олег Іванович</p>
                    <span>(0432) 51-13-20, (067)431-58-00</span>
                  </li>
                  <li>
                    <p>Попич Юрій Іванович</p>
                    <span>(067)440-74-83</span>
                  </li>
                </ul>
              </div> */}
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
