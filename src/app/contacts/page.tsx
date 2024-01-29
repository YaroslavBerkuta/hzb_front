import { Breadcrumbs } from "@/shared/components";
import React from "react";

import styles from "./index.module.scss";
import Image from "next/image";

export default function Contacts() {
  return (
    <>
      <section>
        <Breadcrumbs />
      </section>
      <section>
        <div className="container">
          <div className={styles.flex}>
            <div className={styles.item}>
              <div className="sectionTitle">
                <h2>Приймальня</h2>
              </div>
              <ul className={styles.contactWarapper}>
                <li>
                  <span>Телефон:</span>
                  <div>
                    <p>(0382)644396 </p>
                    <p>(0382)644358</p>
                  </div>
                </li>
                <li>
                  <span>E-mail:</span>
                  <div>
                    <p className={styles.email}>xmbeton@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className="sectionTitle">
                <h2>Відділ збуту</h2>
              </div>
              <ul className={styles.contactWarapper}>
                <div className="sectionTitle">
                  <h2 style={{ fontWeight: "400" }}>ЗАЛІЗОБЕТОНІ ВИРОБИ</h2>
                </div>
                <li>
                  <span>Телефон:</span>
                  <div>
                    <p>+380969176074</p>
                    <p>+380988671678</p>
                    <p>(0382)643025</p>
                    <p>(0382)643603</p>
                  </div>
                </li>
                <li>
                  <span>E-mail:</span>
                  <div>
                    <p className={styles.email}>skhzb.zbut@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className="sectionTitle">
                <h2>Бухгалтерія</h2>
              </div>
              <ul className={styles.contactWarapper}>
                <li>
                  <span>Телефон:</span>
                  <div>
                    <p>+380975401087</p>
                    <p>+380974890838</p>
                    <p>(0382)644369</p>
                  </div>
                </li>
                <li>
                  <span>E-mail:</span>
                  <div>
                    <p className={styles.email}>xmbeton@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className="sectionTitle">
                <h2 style={{ fontWeight: "400" }}>ЗАЛІЗОБЕТОНІ ВИРОБИ</h2>
              </div>
              <ul className={styles.contactWarapper}>
                <li>
                  <span>Телефон:</span>
                  <div>
                    <p>+380967875437 </p>
                    <p>+380985060240</p>
                    <p>+380673811183</p>
                    <p>(0382)645262</p>
                  </div>
                </li>
                <li>
                  <span>E-mail:</span>
                  <div>
                    <p className={styles.email}>a-hzb@ukr.net</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className="sectionTitle">
                <h2>ВІДДІЛ ПОСТАЧАННЯ</h2>
              </div>
              <ul className={styles.contactWarapper}>
                <li>
                  <span>Телефон:</span>
                  <div>
                    <p>+380964529572 </p>
                    <p>+380977013673</p>
                    <p>(0382)645300</p>
                  </div>
                </li>
                <li>
                  <span>E-mail:</span>
                  <div>
                    <p className={styles.email}>dimad9441@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className="sectionTitle">
                <h2 style={{ fontWeight: "400" }}>ВИРОБИ З ДЕРЕВИНИ</h2>
              </div>
              <ul className={styles.contactWarapper}>
                <li>
                  <span>Телефон:</span>
                  <div>
                    <p>+380987377278</p>
                    <p>(0382)645136</p>
                  </div>
                </li>
                <li>
                  <span>E-mail:</span>
                  <div>
                    <p className={styles.email}>zbuthzb.st@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className="sectionTitle">
                <h2>Випробувальна лабораторія</h2>
              </div>
              <ul className={styles.contactWarapper}>
                <li>
                  <span>Телефон:</span>
                  <div>
                    <p>+380978639352</p>
                    <p>(0382)643205</p>
                  </div>
                </li>
                <li>
                  <span>E-mail:</span>
                  <div>
                    <p className={styles.email}>labhzb@ukr.net</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className="sectionTitle">
                <h2 style={{ fontWeight: "400" }}>
                  ЗАСТУПНИК КЕРІВНИКА ВІДДІЛУ ЗБУТУ
                </h2>
              </div>
              <ul className={styles.contactWarapper}>
                <li>
                  <span>Телефон:</span>
                  <div>
                    <p>+380674950275</p>
                  </div>
                </li>
                <li>
                  <span>E-mail:</span>
                  <div>
                    <p className={styles.email}>v-hzb@ukr.net</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className="sectionTitle">
                <h2>Виробничий відділ</h2>
              </div>
              <ul className={styles.contactWarapper}>
                <li>
                  <span>Телефон:</span>
                  <div>
                    <p>+380673113632</p>
                    <p>(0382)644355</p>
                  </div>
                </li>
                <li>
                  <span>E-mail:</span>
                  <div>
                    <p className={styles.email}>smolicigor1@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className="sectionTitle">
                <h2 style={{ fontWeight: "400" }}>КЕРІВНИК ВІДДІЛУ ЗБУТУ</h2>
              </div>
              <ul className={styles.contactWarapper}>
                <li>
                  <span>Телефон:</span>
                  <div>
                    <p>+380672772202</p>
                  </div>
                </li>
                <li>
                  <span>E-mail:</span>
                  <div>
                    <p className={styles.email}>s_hzb@ukr.net</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.map}>
            <Image src="/map.png" alt="map" layout="fill" />
          </div>
        </div>
      </section>
    </>
  );
}
