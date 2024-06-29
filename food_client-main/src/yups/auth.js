import { object, number, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const AUTHSCHEMA = object({
  phone_number: number().required("Trường này không được để trống"),
  password: string().required("Trường này không được để trống"),
});

export const Auth = yupResolver(AUTHSCHEMA);
