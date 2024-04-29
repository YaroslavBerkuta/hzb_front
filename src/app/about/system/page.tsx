"use client";
import { Breadcrumbs, Slider } from "@/shared/components";
import React from "react";

import styles from "./index.module.scss";
import { useFlatList } from "@/shared/hook";
import { qualityApi } from "@/shared/api/quality";
import { useTranslation } from "react-i18next";
import { Lang, getTranslate } from "@/shared/helpers";
import { DownloadOutlined } from "@ant-design/icons";
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
                  <a
                    href={
                      "https://drive.google.com/drive/folders/1CfsnA3taaPF_zxbM0jL8MZ0ab3JxAwnD?usp=sharing"
                    }
                    target="_blank"
                  >
                    {i18n.language === Lang.UA
                      ? "Завантажити сертифікати"
                      : "Download certificates"}

                    <DownloadOutlined
                      color="black"
                      style={{ marginLeft: "10px" }}
                    />
                  </a>
                </div>
                <div className={styles.slider}>
                  <Slider slides={it.cover.map((it: any) => it.fileUrl)} width={880} height={680} autoplayEnabled={false}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
