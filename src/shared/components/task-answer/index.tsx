"use client";
import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { Collapse, theme } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { FileForm } from "../form";

export const TaskAnswer = () => {
  const items = [
    {
      key: "1",
      label: "Як зробити замовлення?",
      children: (
        <div className={styles.flex}>
          <div>
            <Image src="contacts.svg" width={72} height={72} alt="contacts" />
            <p>Залиште заявку на сайті</p>
          </div>
          <div>
            <Image src="dolar.svg" width={72} height={72} alt="dolar" />
            <p>Консультація й оплата замовлення</p>
          </div>
          <div>
            <Image src="devilery.svg" width={72} height={72} alt="devilery" />
            <p>Доставка</p>
          </div>
        </div>
      ),
      className: styles.item,
    },
    {
      key: "2",
      label: "Які є способи оплати?",
      children: (
        <div className={styles.flex}>
          <div>
            <Image src="bank.svg" width={72} height={72} alt="bank" />
            <p>Банківський переказ</p>
          </div>
          <div>
            <Image src="cart.svg" width={72} height={72} alt="cart" />
            <p>Оплата картою через термінал</p>
          </div>
          <div>
            <Image src="money.svg" width={72} height={72} alt="money" />
            <p>Готівкою в касі підприємства</p>
          </div>
        </div>
      ),
      className: styles.item,
    },
    {
      key: "3",
      label: "Які є варіанти доставки?",
      children: (
        <div className={styles.flex}>
          <div>
            <Image src="car.svg" width={72} height={72} alt="car" />
            <p>Власне авто</p>
          </div>
          <div>
            <Image src="bus.svg" width={72} height={72} alt="bus" />
            <p>Транспорт вантажовідправника</p>
          </div>
          <div>
            <Image src="phone.svg" width={72} height={72} alt="phone" />
            <p>Пошук авто через диспетчера</p>
          </div>
        </div>
      ),
      className: styles.item,
    },
    {
      key: "4",
      label: "Чому з нами вигідно?",
      children: (
        <div className={styles.flex}>
          <div>
            <Image src="system.svg" width={72} height={72} alt="system" />
            <p>Програми лояльності</p>
          </div>
          <div>
            <Image src="dolar.svg" width={72} height={72} alt="dolar" />
            <p>Система знижок</p>
          </div>
          <div>
            <Image src="sun.svg" width={72} height={72} alt="sun" />
            <p>Сезонні акції</p>
          </div>
          <div>
            <Image src="3d.svg" width={72} height={72} alt="phone" />
            <p>Розпродаж залишків</p>
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
