import { http } from "@/shared/config";
import { CatalogTypes } from "@/shared/types";

class CategoriesApi {
  getSubcategori(key: CatalogTypes) {
    return http.get<any>(`public/categories/subcategory/${key}`);
  }
}

export const categoriesApi = new CategoriesApi();
