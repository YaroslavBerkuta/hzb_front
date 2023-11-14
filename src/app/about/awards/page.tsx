"use client";
import React from "react";

import styles from "./index.module.scss";
import { Breadcrumbs, Button } from "@/shared/components";
import Image from "next/image";
import { useFlatList } from "@/shared/hook";
import { awardsApi } from "@/shared/api/awards";
import { useTranslation } from "react-i18next";
import { getTranslate } from "@/shared/helpers";

export default function Awards() {
  const { items, loadMore } = useFlatList({
    fetchItems: awardsApi.getList,
    needInit: true,
  });

  const { i18n, t } = useTranslation();

  return (
    <>
      <Breadcrumbs />
      <section>
        <div className="container">
          <div className={styles.flex}>
            {items?.map((it: any) => (
              <div className={styles.item}>
                <div>
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
                </div>
                <div>
                  <Image
                    src={it.cover[0].fileUrl}
                    alt="awards"
                    height={433}
                    width={344}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.btn}>
            <Button
              onClick={() => loadMore()}
              text={t("shared.element.loadMore")}
            />
          </div>
        </div>
      </section>
    </>
  );
}
