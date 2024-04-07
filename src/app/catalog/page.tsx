"use client";
import { Breadcrumbs } from "@/shared/components";
import React, { useEffect, useState } from "react";

import { GoodsList, SubCategoriesList } from "./components";
import { useFlatList } from "@/shared/hook";
import { productApi } from "@/shared/api/products";
import { categoriesApi } from "@/shared/api/categories";
import { HeaderComponent } from "./components/headerComponent";
import { usePathname, useRouter } from "next/navigation";

export default function Catalog({ searchParams }: { searchParams: any }) {
  const [catalog, setCatalog] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();
  const path = usePathname();
  var res;

  const setSub = (val: any) => {
    setLoadParams({ ...val, page: 1 });
    const url = `${path}?parent=${searchParams.parent}&sub=${val.categoryKey}`;
    router.push(url);
  };

  const { items, count, setLoadParams, resetFlatList, loadParams } =
    useFlatList<any>({
      fetchItems: productApi.getLis,
      needInit: true,
      loadParams: {
        categoryKey: searchParams.sub || searchParams.parent,
      },
    });

  const loadCatalog = async (category: string) => {
    try {
      res = await categoriesApi.getCatalog(category);
      setCatalog(res?.data?.catalog?.fileUrl);
      setPrice(res?.data?.price?.fileUrl);
    } catch (error) {
      console.log("load error", error);
    }
  };

  useEffect(() => {
    setLoadParams({
      categoryKey: searchParams.sub || searchParams.parent,
    });
    loadCatalog(searchParams.sub || searchParams.parent);
  }, [searchParams]);

  return (
    <>
      <Breadcrumbs>
        <HeaderComponent priceLink={price} catalogLink={catalog} />
      </Breadcrumbs>
      <section>
        <div className="container">
          <SubCategoriesList
            parentCat={searchParams.parent}
            setCat={(val) => setSub(val)}
            active={searchParams?.sub}
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
