"use client";
import {
  Advantages,
  Button,
  CatalogPrewiev,
  Clients,
  Instagram,
  Partner,
  TaskAnswer,
} from "@/shared/components";
import styles from "@/shared/styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const myRef = useRef<any>(null);
  const executeScroll = () => myRef?.current.scrollIntoView();
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroFlex}>
            <div className={styles.heroDesc}>
              <h1>{t("shared.element.homeTitle")}</h1>
              <Button
                text={t("shared.element.btnOrange")}
                onClick={executeScroll}
              />
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/main.png"
                alt="main"
                loading="lazy"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="sectionTitle">
            <h2>{t("shared.sectionTitle.advantages")}</h2>
          </div>
          <Advantages />
        </div>
      </section>
       <section>
        <div className="container">
          <div className="sectionTitle">
            <h2>КАТАЛОГ</h2>
          </div>
          <CatalogPrewiev name="" image="" key="" />
        </div>
      </section> 
      <section>
        <div className="container">
          <div className="sectionTitle">
            <h2>{t("shared.sectionTitle.partners")}</h2>
          </div>
          <Partner />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="sectionTitle">
            <h2>{t("shared.sectionTitle.clients")}</h2>
          </div>
          <Clients />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="sectionTitle">
            <h2>{t("shared.sectionTitle.instagram")}</h2>
            <Link
              className="btn-outline outline-gray"
              href={"https://www.instagram.com/hzb.ukraine/"}
              target="_blank"
            >
              {t("shared.element.goTo")}
            </Link>
          </div>
          <Instagram />
        </div>
      </section>
      <section ref={myRef}>
        <div className="container">
          <div className="sectionTitle">
            <h2>{t("shared.sectionTitle.question")}</h2>
          </div>
          <TaskAnswer />
        </div>
      </section>
    </>
  );
}

export default Home;
