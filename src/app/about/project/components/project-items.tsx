import React from "react";
import Image from "next/image";

import styles from "../index.module.scss";
import Link from "next/link";

export const ProjectItems = () => {
  return (
    <Link className={styles.item} href="project/1">
      <div className={styles.detail}>
        <h2>ТОВ «Старокостянтинівський олійно екстракційний завод»</h2>
        <p>
          ТОВ «Старокостянтинівський олійно екстракційний завод» інвестиційний
          проект ТОВ «Кернел» м. Старокостянтинів, Хмельницька область. 2017 р.
          — у жовтні компанія «Кернел» анонсувала плани будівництва заводу з
          переробки соняшника в 2018–2019 рр. на Західній Україні. 2019 р. — у
          квітні «Кернел» розпочав будівництво Старокостянтинівського
          олійноекстракційного заводу.
        </p>
      </div>
      <div className={styles.image}>
        <Image src="/blog.png" alt="project" width={680} height={500} />
      </div>
    </Link>
  );
};
