"use client";
import { Breadcrumbs, Slider } from "@/shared/components";
import React from "react";

import styles from "./index.module.scss";
import { useFlatList } from "@/shared/hook";
import { qualityApi } from "@/shared/api/quality";
import { useTranslation } from "react-i18next";
import { getTranslate } from "@/shared/helpers";
export default function System() {
  const { items } = useFlatList({
    fetchItems: qualityApi.getList,
    needInit: true,
  });
  const { i18n } = useTranslation();
  return (
    <>
      <Breadcrumbs />
      <section>
        <div className="container">
          <div className={styles.flex}>
            {items?.map((it: any) => (
              <div className={styles.item}>
                <div className={styles.detail}>
                  <div className="sectionTitle">
                    <h2>
                      {getTranslate<any>(it.translations, i18n.language)?.name}
                    </h2>
                  </div>
                  <p>
                    {
                      getTranslate<any>(it.translations, i18n.language)
                        ?.description
                    }
                  </p>
                  {/* <a href="" download={true}>
                    Завантажити сертифікати
                    <DownloadOutlined
                      color="black"
                      style={{ marginLeft: "10px" }}
                    />
                  </a> */}
                </div>
                <Slider slides={it.cover.map((it: any) => it.fileUrl)} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
