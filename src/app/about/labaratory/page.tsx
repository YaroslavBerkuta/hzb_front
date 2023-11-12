"use client";
import { Breadcrumbs, Slider } from "@/shared/components";
import React, { useCallback } from "react";
import { LabolatoryList } from "./components/labolatory-list";

export default function Labaratory() {
  return (
    <>
      <Breadcrumbs />
      <section>
        <div className="container">
          <LabolatoryList />
        </div>
      </section>
    </>
  );
}
