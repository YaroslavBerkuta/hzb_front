import { Breadcrumbs } from "@/shared/components";
import React from "react";

import styles from "./index.module.scss";
import { Metadata } from "next";
import { ProjectList } from "./components/project-list";

export const metadata: Metadata = {
  title: "Реалізовані проекти",
};

export default function Projects() {
  return (
    <>
      <Breadcrumbs />
      <section>
        <div className="container">
          <div className={styles.flex}>
            <ProjectList />
          </div>
        </div>
      </section>
    </>
  );
}
