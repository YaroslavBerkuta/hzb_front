import { http } from "@/shared/config";

class ProductionsClass {
  getList = (params: any) => {
    return http.get<any>("public/productions", { params });
  };
}

export const productionsApi = new ProductionsClass();
