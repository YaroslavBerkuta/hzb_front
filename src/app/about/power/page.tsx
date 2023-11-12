import { Breadcrumbs } from "@/shared/components";
import React from "react";
import { PowerList } from "./components/power-list";
import { useFlatList } from "@/shared/hook";
import { productionsApi } from "@/shared/api/power";

export default function Power() {
  return (
    <>
      <Breadcrumbs />
      <section>
        <div className="container">
          <div className="sectionTitle">
            <h2>Виробничі потужності</h2>
            <p>
              Виробничі потужності ТДВ «Хмельницькзалізобетон» це три сучасні
              цехи з виробництва високоякісної продукції з найсучаснішим
              обладнанням провідних світових компаній: ELEMATIC, WEILER, C.G.M.,
              BHS, TEKA, WAINIG, GOMA, HICAS, LE.KO.
            </p>
          </div>
          <PowerList />
        </div>
      </section>
    </>
  );
}
