"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";
import { FileForm } from "../form";
import { useTranslation } from "react-i18next";

export const TaskAnswer = () => {
  const { t } = useTranslation();
  const [isMuted, setIsMuted] = useState(true);
  const toggleSound = () => {
    setIsMuted(!isMuted);
  };
  return (
    <div className={styles.wrapper}>
      <FileForm />
      <div style={{position: 'relative'}}>
        <video className="video" src="/contact.mp4" autoPlay muted={isMuted} loop/>
        <button onClick={toggleSound} className={styles.button}><img src={isMuted ? '/volume-mute.svg' : '/volume.svg'}></img></button>
      </div>
    </div>
  );
};
