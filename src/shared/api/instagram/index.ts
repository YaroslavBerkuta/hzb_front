import { http } from "@/shared/config";

export const instagramList = (params: any) => {
  return http.get("instagram/list", params);
};
