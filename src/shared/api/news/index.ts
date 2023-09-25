import { api } from "@/shared/config";

export const getList = (params: any): any => {
  return api.get("publick/news", { params });
};
