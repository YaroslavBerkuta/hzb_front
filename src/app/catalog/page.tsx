"use client";
import { Breadcrumbs } from "@/shared/components";
import React, { useEffect } from "react";

import { GoodsList, SubCategoriesList } from "./components";
import { useFlatList } from "@/shared/hook";
import { productApi } from "@/shared/api/products";

export default function Catalog({ searchParams }: { searchParams: any }) {
  const { items, count, setLoadParams, resetFlatList, loadParams } =
    useFlatList<any>({
      fetchItems: productApi.getLis,
      needInit: true,
      loadParams: {
        categoryKey: searchParams.parent,
      },
    });

  useEffect(() => {
    resetFlatList();
  }, [searchParams.parent]);

  return (
    <>
      <Breadcrumbs />
      <section>
        <div className="container">
          <SubCategoriesList
            parentCat={searchParams.parent}
            setCat={(val) => setLoadParams(val)}
          />
          <GoodsList
            items={items}
            count={count}
            setParams={(val) => setLoadParams(val)}
          />
        </div>
      </section>
    </>
  );
}
