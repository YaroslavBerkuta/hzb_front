"use client";
import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { Collapse } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { FileForm } from "../form";
import { useTranslation } from "react-i18next";

export const TaskAnswer = () => {
  const { t } = useTranslation();
  const items = [
    {
      key: "1",
      label: t("question.firstTab.title"),
      children: (
        <div className={styles.flex}>
          <div>
            <Image src="contacts.svg" width={72} height={72} alt="contacts" />
            <p>{t("question.firstTab.el1")}</p>
          </div>
          <div>
            <Image src="dolar.svg" width={72} height={72} alt="dolar" />
            <p>{t("question.firstTab.el2")}</p>
          </div>
          <div>
            <Image src="devilery.svg" width={72} height={72} alt="devilery" />
            <p>{t("question.firstTab.el3")}</p>
          </div>
        </div>
      ),
      className: styles.item,
    },
    {
      key: "2",
      label: t("question.secondTab.title"),
      children: (
        <div className={styles.flex}>
          <div>
            <Image src="bank.svg" width={72} height={72} alt="bank" />
            <p>{t("question.secondTab.el1")}</p>
          </div>
          <div>
            <Image src="cart.svg" width={72} height={72} alt="cart" />
            <p>{t("question.secondTab.el2")}</p>
          </div>
          <div>
            <Image src="money.svg" width={72} height={72} alt="money" />
            <p>{t("question.secondTab.el3")}</p>
          </div>
        </div>
      ),
      className: styles.item,
    },
    {
      key: "3",
      label: t("question.thirdTab.title"),
      children: (
        <div className={styles.flex}>
          <div>
            <Image src="car.svg" width={72} height={72} alt="car" />
            <p>{t("question.thirdTab.el1")}</p>
          </div>
          <div>
            <Image src="bus.svg" width={72} height={72} alt="bus" />
            <p>{t("question.thirdTab.el2")}</p>
          </div>
          <div>
            <Image src="phone.svg" width={72} height={72} alt="phone" />
            <p>{t("question.thirdTab.el3")}</p>
          </div>
        </div>
      ),
      className: styles.item,
    },
    {
      key: "4",
      label: t("question.fourTab.title"),
      children: (
        <div className={styles.flex}>
          <div>
            <Image src="system.svg" width={72} height={72} alt="system" />
            <p>{t("question.fourTab.el1")}</p>
          </div>
          <div>
            <Image src="dolar.svg" width={72} height={72} alt="dolar" />
            <p>{t("question.fourTab.el2")}</p>
          </div>
          <div>
            <Image src="sun.svg" width={72} height={72} alt="sun" />
            <p>{t("question.fourTab.el3")}</p>
          </div>
          <div>
            <Image src="3d.svg" width={72} height={72} alt="phone" />
            <p>{t("question.fourTab.el4")}</p>
          </div>
        </div>
      ),
      className: styles.item,
    },
  ];
  return (
    <div className={styles.wrapper}>
      <Collapse
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <RightOutlined
            rotate={isActive ? 90 : 0}
            style={{ fontSize: "15px", color: isActive ? "#FD7A19" : "black" }}
          />
        )}
        items={items}
        className={styles.tab}
      />
      <FileForm />
    </div>
  );
};
