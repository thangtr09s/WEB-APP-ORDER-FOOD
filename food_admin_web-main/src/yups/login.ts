import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

export const LoginSchema = object({
  email: string().email().required(),
  password: string().required(),
});

export const LoginResolver = yupResolver(LoginSchema)
