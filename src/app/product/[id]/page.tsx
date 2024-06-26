"use client";
import { Slider } from "@/shared/components";
import { FileForm } from "@/shared/components/form";
import React, { useEffect, useState } from "react";

import styles from "../index.module.scss";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { productApi } from "@/shared/api/products";
import { getTranslate } from "@/shared/helpers";
import { useTranslation } from "react-i18next";
import { Breadcrumb } from "antd";

export default function Product() {
  const params = useParams();
  const { t, i18n } = useTranslation();
  const [data, setData] = useState<any>();
  const router = useRouter();

  const load = async () => {
    try {
      const res = await productApi.detail(Number(params?.id));
      setData(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className={styles.wrapper}>
            <Breadcrumb
              className={styles.flex}
              items={[
                {
                  title: t(`bread.home`),
                  href: "/",
                  className: styles.item,
                  key: "home",
                },
                {
                  key: "catalog",
                  title: t(`bread.catalog`),
                  className: styles.item,
                  onClick: () => router.back(),
                },
                {
                  key: data?.id,
                  title: getTranslate<any>(data?.translations, i18n.language)
                    ?.name,
                  className: styles.item,
                },
              ]}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="sectionTitle">
            <h2>
              {getTranslate<any>(data?.translations, i18n.language)?.name}
            </h2>
          </div>
          <div>
            <div
              className={styles.info}
              dangerouslySetInnerHTML={{
                __html: getTranslate<any>(data?.translations, i18n.language)
                  ?.info,
              }}
            />
            <div className={styles.detailContainer}>
              <div className={styles.slider}>
                <Slider slides={data?.gallery?.map((it: any) => it.fileUrl)} width={600} height={400} autoplayEnabled={false}/>
              </div>
              <div
                className={styles.detail}
                dangerouslySetInnerHTML={{
                  __html: getTranslate<any>(data?.translations, i18n.language)
                    ?.description,
                }}
              />
            </div>
          </div>
          {data?.table.length && (
            <div className={styles.table}>
              <Image src={data?.table[0]?.fileUrl} alt="table" layout="fill" />
            </div>
          )}
        </div>
      </section>
      <section className={styles.fullFrom}>
        <FileForm />
      </section>
    </>
  );
}
