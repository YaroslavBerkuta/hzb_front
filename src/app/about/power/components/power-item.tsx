import React from "react";
import styles from "../index.module.scss";
import { Slider } from "@/shared/components";

export const PowerItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.detail}>
        <div className="sectionTitle">
          <h2>ЦЕХ №1</h2>
        </div>
        <ul>
          <li>збірний залізобетон: - 120 тис.м 3</li>
          <li>плити перекриття - 55 тис.м 3</li>
          <li>дорожні елементи - 8 тис.м 3</li>
          <li>палі - 25 тис.м 3</li>
        </ul>
      </div>
      <Slider />
    </div>
  );
};
