import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const movieManagementShema = object({
  info: string().required(),
  thumb: string().required(),
  genre: string().required(),
  Area: string().required(),
  update: string().required(),
  view: string().required(),
});

export const movieManagement = yupResolver(movieManagementShema);
