import { categoriesApi } from "@/shared/api/categories";
import { CatalogTypes } from "@/shared/types";
import { useEffect, useState } from "react";

export const useCatalogCategoty = (parentCategory: CatalogTypes) => {
  const [sub, setSub] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [active, setActive] = useState<string | null>(null);

  const loadCategory = async (key: CatalogTypes) => {
    setLoading(true);
    try {
      const res = await categoriesApi.getSubcategori(key);
      setSub(res?.data);
    } catch (error) {
      console.log("load category error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategory(parentCategory);
  }, [parentCategory]);

  return {
    sub,
    loading,
    active,
    setActive,
  };
};
