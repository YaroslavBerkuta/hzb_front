"use client";
import { Breadcrumbs, ButtonWhite } from "@/shared/components";
import React from "react";

import styles from "./index.module.scss";

export default function Main() {
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
            <span>Маєте запитання?</span>
            <p>Зв’язатись з нами</p>

            <div className={styles.main}>
              <label>
                <span>Ім’я</span>
                <input type="text" />
              </label>
              <label>
                <span>Прізвище</span>
                <input type="text" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" />
              </label>
              <label>
                <span>Телефон</span>
                <input type="tel" />
              </label>
              <label>
                <span>Коментар</span>
                <textarea name="" id=""></textarea>
              </label>
            </div>
            <ButtonWhite onClick={() => {}} text="Зв’язатись з нами" />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.flex}>
            <div>
              <div className="sectionTitle">
                <h2>Наша адреса</h2>
              </div>
              <ul className={styles.contact}>
                <li>
                  <span>Адреса:</span>
                  <p>Україна, 29000, м. Хмельницький, віл. Чорновола, 31</p>
                </li>
                <li>
                  <span>Телефон:</span>
                  <p>+380977262832</p>
                </li>
                <li>
                  <span>E-mail:</span>
                  <p>ula-hzb@ukr.net</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="sectionTitle">
                <h2>Випробувальна лабораторія</h2>
              </div>
              <ul className={styles.contact}>
                <li>
                  <span>Телефон:</span>
                  <p>(0382) 64-32-05</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="sectionTitle">
                <h2>Відділ збуту</h2>
              </div>
              <ul className={styles.contact}>
                <span>Сергій</span>
                <li>
                  <span>Телефон:</span>
                  <p>+380988671678</p>
                </li>
                <li>
                  <span>E-mail:</span>
                  <p>skhzb.zbut@gmail.com</p>
                </li>
                <span>Марина</span>
                <li>
                  <span>Телефон:</span>
                  <p>+380969176074</p>
                </li>
                <li>
                  <span>E-mail:</span>
                  <p>skhzb.zbut@gmail.com</p>
                </li>
                <span>Вячеслав</span>
                <li>
                  <span>Телефон:</span>
                  <p>+380969176074</p>
                </li>
                <li>
                  <span>E-mail:</span>
                  <p>skhzb.zbut@gmail.com</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="sectionTitle">
                <h2>Виробничий відділ</h2>
              </div>
              <ul className={styles.contact}>
                <li>
                  <span>Телефон:</span>
                  <p>(0382) 64-43-55</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="sectionTitle">
                <h2>Відділ постачання</h2>
              </div>
              <ul className={styles.contact}>
                <span>Дмитро</span>
                <li>
                  <span>Телефон:</span>
                  <p>+380988671678</p>
                </li>
                <li>
                  <span>E-mail:</span>
                  <p>skhzb.zbut@gmail.com</p>
                </li>
                <span>Микола</span>
                <li>
                  <span>Телефон:</span>
                  <p>+380969176074</p>
                </li>
                <li>
                  <span>E-mail:</span>
                  <p>skhzb.zbut@gmail.com</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="sectionTitle">
                <h2>Бухгалтерія</h2>
              </div>
              <ul className={styles.contact}>
                <li>
                  <span>Телефон:</span>
                  <p>(0382) 64-43-69</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
