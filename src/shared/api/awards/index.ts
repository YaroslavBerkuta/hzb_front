import { http } from "@/shared/config";

class AwardsApi {
  getList(params: any) {
    return http.get<any>("public/awards", { params });
  }
}

export const awardsApi = new AwardsApi();
