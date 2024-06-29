import httpRequest from "utils/httpRequest";

export const getStatisticals = async () => {
  const res = await httpRequest("general-information");

  return res.data;
};

export const getTopProducts = async () => {
  const res = await httpRequest("top-products");

  return res.data;
};

export const getTopCategories = async () => {
  const res = await httpRequest("top-categories");

  return res.data;
};
