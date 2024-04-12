import React, { FC } from "react";

import styles from "../index.module.scss";
import { Slider } from "@/shared/components";

interface IProsp {
  title: string;
  description: string;
  images: any[];
}

export const LabolatoryItem: FC<IProsp> = ({ title, description, images }) => {
  return (
    <div className={styles.item}>
      <div className={styles.detail}>
        <div className="sectionTitle">
          <h2>{title}</h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className={styles.slider}>
        <Slider slides={images.map((it: any) => it.fileUrl)} width={880} height={680} />
      </div>
    </div>
  );
};
