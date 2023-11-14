import { http } from "@/shared/config";

export interface IMainFormData {
  name: string;
  surname?: string;
  email: string;
  phone: string;
  comment: string;
}

export const sendMail = (data: IMainFormData) => {
  return http.post<any>("/public/form/main", data);
};
