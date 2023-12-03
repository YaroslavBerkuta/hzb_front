import { http } from "@/shared/config";

export const getPartners = (params: any) => {
  return http.get<any>("public/partners", { params });
};
