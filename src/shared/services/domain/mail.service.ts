import { IMainFormData, sendMail } from "@/shared/api/form";
import { message } from "antd";

export const sendForm = async (data: IMainFormData) => {
  try {
    await sendMail(data);
    message.success("Ваше повідомлення доставлено");
  } catch (error) {
    message.error("Ваше поввідомлення не доставлено");
  }
};
