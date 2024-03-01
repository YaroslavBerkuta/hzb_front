"use client";
import { Breadcrumbs } from "@/shared/components";
import React, { useEffect, useState } from "react";

import { GoodsList, SubCategoriesList } from "./components";
import { useFlatList } from "@/shared/hook";
import { productApi } from "@/shared/api/products";
import { categoriesApi } from "@/shared/api/categories";
import { HeaderComponent } from "./components/headerComponent";

export default function Catalog({ searchParams }: { searchParams: any }) {
  const [catalog, setCatalog] = useState("");
  const [price, setPrice] = useState("");
  const { items, count, setLoadParams, resetFlatList, loadParams } =
    useFlatList<any>({
      fetchItems: productApi.getLis,
      needInit: true,
      loadParams: {
        categoryKey: searchParams.parent,
      },
    });

  const loadCatalog = async () => {
    try {
      const res = await categoriesApi.getCatalog(loadParams?.categoryKey);
      setCatalog(res?.data?.catalog?.fileUrl);
      setPrice(res?.data?.price?.fileUrl);
    } catch (error) {
      console.log("load error", error);
    }
  };

  useEffect(() => {
    resetFlatList();
  }, [searchParams.parent]);

  useEffect(() => {
    loadCatalog();
  }, [loadParams, searchParams.parent]);

  return (
    <>
      <Breadcrumbs>
        <HeaderComponent priceLink={price} catalogLink={catalog} />
      </Breadcrumbs>
      <section>
        <div className="container">
          <SubCategoriesList
            parentCat={searchParams.parent}
            setCat={(val) => setLoadParams({ ...val, page: 1 })}
          />
          <GoodsList
            items={items}
            count={count}
            setParams={(val) => setLoadParams(val)}
            page={loadParams.page}
          />
        </div>
      </section>
    </>
  );
}
