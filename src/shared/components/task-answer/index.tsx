"use client";
import React from "react";
import styles from "./index.module.scss";
import { FileForm } from "../form";
import { useTranslation } from "react-i18next";

export const TaskAnswer = () => {
  const { t } = useTranslation();
  
  return (
    <div className={styles.wrapper}>
      <FileForm />
      <video className="video" src="/contact.mp4" controls/>
    </div>
  );
};
