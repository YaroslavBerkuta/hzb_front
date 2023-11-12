import { http } from "@/shared/config";

class LabolatoryApi {
  getList(params: any) {
    return http.get<any>("public/labolatory", { params });
  }
}

export const labolatoryApi = new LabolatoryApi();
