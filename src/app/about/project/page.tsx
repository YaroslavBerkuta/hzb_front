import { Breadcrumbs } from "@/shared/components";
import React from "react";

import styles from "./index.module.scss";
import { Metadata } from "next";
import { ProjectItems } from "./components";

export const metadata: Metadata = {
  title: "Реалізовані проекти",
  description: "Generated by create next app",
};

export default function Projects() {
  return (
    <>
      <Breadcrumbs />
      <section>
        <div className="container">
          <div className={styles.flex}>
            <ProjectItems />
            <ProjectItems />
          </div>
        </div>
      </section>
    </>
  );
}