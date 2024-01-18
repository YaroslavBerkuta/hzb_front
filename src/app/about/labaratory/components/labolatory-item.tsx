import React, { FC } from "react";

import styles from "../index.module.scss";
import { Slider } from "@/shared/components";
import { DownloadOutlined } from "@ant-design/icons";

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
        {/* <a href="" download={true}>
          Завантажити сертифікати
          <DownloadOutlined color="black" style={{ marginLeft: "10px" }} />
        </a> */}
      </div>
      <Slider slides={images.map((it: any) => it.fileUrl)} />
    </div>
  );
};
