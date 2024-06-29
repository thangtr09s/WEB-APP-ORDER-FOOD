import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const classifyFormSchema = object({
  name: string().required(),
  slug: string().required(),
});

export const ClassifyForm = yupResolver(classifyFormSchema);


