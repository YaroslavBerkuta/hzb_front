import { http } from "@/shared/config";

class DistributorApi {
  getDistributor(key: string): any {
    return http.get<any>(`public/distributor/${key}`, {});
  }
}

export const distributorApi = new DistributorApi();
