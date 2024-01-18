import { Breadcrumbs } from "@/shared/components";
import React from "react";
import { PowerList } from "./components/power-list";

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
          <div className="sectionTitle">
            <p>
              Фахівці ТДВ «Хмельницькзалізобетон» постійно адаптовують нові
              технології до вимог українських норм, підбирають необхідні
              рецептури бетону, ретельно виконують розрахунок арматури та
              сипучих. І якрезультат, це досягнення високої якості продукції, що
              забезпечує конкурентну роботу підприємства. На сьогоднішній день
              на нашому підприємстві представлений широкий спектр залізобетонних
              ібетонних виробів, товарних бетонів і розчинів, та столярної
              продукції.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
