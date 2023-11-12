import { http } from "@/shared/config";

class QualityApi {
  getList(params: any) {
    return http.get<any>("public/quality", { params });
  }
}

export const qualityApi = new QualityApi();
