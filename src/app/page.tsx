"use client";
import {
  Advantages,
  Button,
  CatalogPrewiev,
  Clients,
  Instagram,
  Partner,
  Slider,
  TaskAnswer,
} from "@/shared/components";
import styles from "@/shared/styles/Home.module.scss";
import Link from "next/link";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Autoplay } from "swiper/modules";
import SwiperCore from 'swiper';
SwiperCore.use([Autoplay]);

function Home() {
  const myRef = useRef<any>(null);
  const executeScroll = () => myRef?.current.scrollIntoView();
  const { t } = useTranslation();
  const photoUrls = [
    "/main/1.jpg",
    "/main/2.jpg",
    "/main/5.jpg",
    "/main/6.jpg",
    "/main/7.jpg",
    "/main/8.jpg",
    "/main/3.jpg",
    "/main/9.jpg",
    "/main/10.jpg",
    "/main/12.jpg",
  ];
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
              <Slider slides={photoUrls.map((url, index)=>url)} width={1576} height={500} autoplay={{ delay: 5000 }} autoplayEnabled={true}/>
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
