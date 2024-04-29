import React, { FC } from "react";
import styles from "../index.module.scss";
import { Slider } from "@/shared/components";

interface IProps {
  title: string;
  content: string;
  images: any[];
}

export const PowerItem: FC<IProps> = ({ title, content, images }) => {
  return (
    <div className={styles.item}>
      <div className={styles.detail}>
        <div className="sectionTitle">
          <h2>{title}</h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
      <div className={styles.slider}>
        <Slider slides={images.map((it) => it.fileUrl)} width={880} height={680} autoplayEnabled={false} />
      </div>
    </div>
  );
};
