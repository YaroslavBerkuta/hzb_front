import {
  Advantages,
  Button,
  CatalogPrewiev,
  Partner,
} from "@/shared/components";
import styles from "@/shared/styles/Home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroFlex}>
            <div className={styles.heroDesc}>
              <h1>
                В справі будівництва потрібно працювати з справжніми
                професіоналами
              </h1>
              <Button text="Зв’язатись з нами" />
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
            <h2>ПЕРЕВАГИ</h2>
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
            <h2>ПАРТНЕРИ</h2>
          </div>
          <Partner />
        </div>
      </section>
    </>
  );
}
