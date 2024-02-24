import { http } from "@/shared/config";
import { CatalogTypes } from "@/shared/types";

class CategoriesApi {
  getSubcategori(key: CatalogTypes) {
    return http.get<any>(`public/categories/subcategory/${key}`);
  }
  getCatalog(key: string) {
    return  http.get<any>(`public/categories/catalog/${key}`);
  }
}

export const categoriesApi = new CategoriesApi();
