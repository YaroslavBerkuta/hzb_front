import { Slider } from "@/shared/components";
import { FileForm } from "@/shared/components/form";
import React from "react";

import styles from "../index.module.scss";
import Image from "next/image";

export default function Product() {
  return (
    <>
      <section>
        <div className="container">
          <div className="sectionTitle">
            <h2>
              Плити перекриття залізобетонні багатопустотні попередньо напружені
            </h2>
          </div>
          <div>
            <div className={styles.info}>
              <p>
                Шириною 1200 мм і висотою 220 мм. (Шифр 1105-ПЕ-0-1) Плити
                перекриттів залізобетонні багатопустотні попередньо напружені
                призначені для використання у житлових, громадських та
                промислових будівлях
              </p>
            </div>
            <div className={styles.detailContainer}>
              <div className={styles.slider}>
                <Slider slides={["/table.png", "/table.png", "/table.png"]} />
              </div>
              <div className={styles.detail}>
                <p>Приклад умовного позначення: ПБ 60.12-8-12К7-5ВрII</p>
                <ul>
                  <li>
                    ПБ – плита залізобетонна багатопустотна, висотою перерізу
                    220 мм.
                  </li>
                  <li>60 – довжина плити 5980 мм;</li>
                  <li>12 – ширина плити 1200 мм;</li>
                  <li>8 – розрахункове навантаження — 7,85 МПа (800кг/м2);</li>
                  <li>
                    12К7 – армування нижньої зони плити попередньо напруженими
                    канатами 12К7;
                  </li>
                  <li>
                    5ВрII – армування верхньої зони плити попередньо напруженим
                    дротом класу 5ВрII
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.table}>
            <Image src="/table.png" alt="table" layout="fill" />
          </div>
        </div>
      </section>
      <section className={styles.fullFrom}>
        <FileForm />
      </section>
    </>
  );
}
