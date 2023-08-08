"use client";
import React from "react";

import styles from "./index.module.scss";
import { Breadcrumbs, Button } from "@/shared/components";
import Image from "next/image";

export default function Awards() {
  return (
    <>
      <Breadcrumbs />
      <section>
        <div className="container">
          <div className={styles.flex}>
            <div className={styles.item}>
              <div>
                <div className="sectionTitle">
                  <h2>ПОДЯКА</h2>
                </div>
                <p>
                  Видана: Хмельницькою обласною адміністрацією генеральному
                  директору Корбуту Анатолію Миколайовичу за багаторічну
                  сумлінну працю, високий професіоналзм, та з нагоди 60-річчя
                  від дня народження
                </p>
              </div>
              <div>
                <Image
                  src="/awards.png"
                  alt="awards"
                  height={433}
                  width={344}
                />
              </div>
            </div>
            <div className={styles.item}>
              <div>
                <div className="sectionTitle">
                  <h2>ПОДЯКА</h2>
                </div>
                <p>
                  Видана: Хмельницькою обласною адміністрацією генеральному
                  директору Корбуту Анатолію Миколайовичу за багаторічну
                  сумлінну працю, високий професіоналзм, та з нагоди 60-річчя
                  від дня народження
                </p>
              </div>
              <div>
                <Image
                  src="/awards.png"
                  alt="awards"
                  height={433}
                  width={344}
                />
              </div>
            </div>
            <div className={styles.item}>
              <div>
                <div className="sectionTitle">
                  <h2>ПОДЯКА</h2>
                </div>
                <p>
                  Видана: Хмельницькою обласною адміністрацією генеральному
                  директору Корбуту Анатолію Миколайовичу за багаторічну
                  сумлінну працю, високий професіоналзм, та з нагоди 60-річчя
                  від дня народження
                </p>
              </div>
              <div>
                <Image
                  src="/awards.png"
                  alt="awards"
                  height={433}
                  width={344}
                />
              </div>
            </div>
          </div>
          <div className={styles.btn}>
            <Button onClick={() => {}} text="Дивитись більше" />
          </div>
        </div>
      </section>
    </>
  );
}
