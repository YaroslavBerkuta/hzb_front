"use client";
import React, { useState } from "react";
import styles from "./file-form.module.scss";
import { Button } from "../button";
import { sendForm } from "@/shared/services/domain/mail.service";
import { IMainFormData } from "@/shared/api/form";
import { useTranslation } from "react-i18next";
import { message } from "antd";

export const FileForm = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<IMainFormData>({
    name: "",
    surname: "",
    email: "",
    phone: "",
    comment: "",
  });
  const handleSubmit = async () => {
    try {
      if (
        data.name.length < 1 ||
        data.email.length < 1 ||
        data.phone.length < 1
      ) {
        return message.error("Не вірно заповнені данні!");
      } else {
        await sendForm(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (val: string, key: string) => {
    setData((prev) => ({ ...prev, [key]: val }));
  };
  return (
    <div className={styles.flex}>
      <span>{t("form.subtitle")}</span>
      <h4>{t("form.title")}</h4>
      <div className={styles.input}>
        <label>{t("form.fullName")}</label>
        <input
          type="text"
          name="name"
          defaultValue={data.name}
          onChange={(e) => onChange(e.target.value, e.target.name)}
          required
        />
      </div>
      <div className={styles.input}>
        <label>{t("form.phone")}</label>
        <input
          type="tel"
          name="phone"
          defaultValue={data.phone}
          onChange={(e) => onChange(e.target.value, e.target.name)}
          required
        />
      </div>
      <div className={styles.input}>
        <label>{t("form.email")}</label>
        <input
          type="email"
          name="email"
          defaultValue={data.email}
          onChange={(e) => onChange(e.target.value, e.target.name)}
          required
        />
      </div>
      <div className={styles.input}>
        <label>{t("form.comment")}</label>
        <textarea
          name="comment"
          id=""
          defaultValue={data.comment}
          onChange={(e) => onChange(e.target.value, e.target.name)}
          cols={30}
          rows={1}
        />
      </div>
      <Button
        text={t("shared.element.btnOrange")}
        onClick={() => handleSubmit()}
      />
    </div>
  );
};
