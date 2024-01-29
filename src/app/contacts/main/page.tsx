"use client";
import { Breadcrumbs, ButtonWhite } from "@/shared/components";
import React, { useState } from "react";

import styles from "./index.module.scss";
import { IMainFormData } from "@/shared/api/form";
import { sendForm } from "@/shared/services/domain/mail.service";
import { useTranslation } from "react-i18next";

export default function Main() {
  const { t } = useTranslation();
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
    </>
  );
}
