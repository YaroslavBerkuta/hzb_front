import { http } from "@/shared/config";

class ProductApi {
  getLis(params: any) {
    return http.get<any>("public/products/list", { params });
  }
  detail(id: number) {
    return http.get<any>(`public/products/${id}`);
  }
}

export const productApi = new ProductApi();
