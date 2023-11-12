import { http } from "@/shared/config";

class ProjectApi {
  getList(params: any) {
    return http.get<any>("public/projects", { params });
  }
}

export const projectApi = new ProjectApi();
