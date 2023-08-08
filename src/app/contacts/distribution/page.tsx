import { Breadcrumbs } from "@/shared/components";
import React from "react";
import { Map } from "./components";

import styles from "./index.module.scss";

export default function Distribution() {
  return (
    <>
      <Breadcrumbs />
      <section>
        <div className="container">
          <div className={styles.flex}>
            <div className={styles.detail}>
              <div className="sectionTitle">
                <h2>Вінниця</h2>
              </div>
              <p>
                Офіційні представники реалізують продукцію ТДВ
                «Хмельницькзалізобетон» гарантованої якості, де впроваджуються
                сучасні стандарти відносин між підприємствами-покупцями та
                дилерами, торговими компаніями, перевізниками, постачальниками
                супутніх послуг тощо. Бути офіційним представником – означає
                дотримуватися стандартів і вимог в реалізації продукції
                «Хмельницькзалізобетон» та користуватися особливими умовами
                співпраці. Це черговий крок у розвитку клієнтоорієнтованого
                бізнесу, який дозволить максимально швидко задовольняти постійно
                зростаючі вимоги споживачів.
              </p>
              <div className={styles.contact}>
                <h3>Контакти</h3>
                <ul>
                  <li>
                    <p>Алексієнко Олег Іванович</p>
                    <span>(0432) 51-13-20, (067)431-58-00</span>
                  </li>
                  <li>
                    <p>Попич Юрій Іванович</p>
                    <span>(067)440-74-83</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Map />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
