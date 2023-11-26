import { Breadcrumbs } from "@/shared/components";
import React from "react";

import styles from "./index.module.scss";
import Link from "next/link";

export default function Catalog() {
  return (
    <>
      {/* <Breadcrumbs /> */}
      <section className={styles.bg}>
        <div className="container">
          <div className={styles.notFound}>
            <h1>
              Сайт знаходиться на стадії розробки. Каталог продукції тимчасово
              недоступний
            </h1>
            <Link className="btn" href={"/"}>
              На головну
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
