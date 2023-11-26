import React from "react";
import { InstagramPost } from "./instagram-post";
import styles from "./index.module.scss";

export const Instagram = () => {
  return (
    <div className={styles.flex}>
      <InstagramPost url={"/client.png"} />
      <InstagramPost url={"/client.png"} />
      <InstagramPost url={"/client.png"} />
      <InstagramPost url={"/client.png"} />
    </div>
  );
};
