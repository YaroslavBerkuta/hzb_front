import React from "react";
import { InstagramPost } from "./instagram-post";
import styles from "./index.module.scss";

export const Instagram = () => {
  return (
    <div className={styles.flex}>
      <InstagramPost url={"/inst1.png"} />
      <InstagramPost url={"/inst2.png"} />
      <InstagramPost url={"/inst3.png"} />
      <InstagramPost url={"/inst4.png"} />
      <InstagramPost url={"/inst5.png"} />
      <InstagramPost url={"/inst6.png"} />
      <InstagramPost url={"/inst7.png"} />
      <InstagramPost url={"/inst8.png"} />
    </div>
  );
};
