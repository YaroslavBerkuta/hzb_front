import { http } from "@/shared/config";

export const getList = (params: any) => {
  return http.get<any>("public/news", { params });
};
