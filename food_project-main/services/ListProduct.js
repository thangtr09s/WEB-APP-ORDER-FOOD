import axios from "axios";

export const getListProduct = async (slug) => {
  const res = await axios.get(
    `https://music-demo123123.000webhostapp.com/api/products-of-category/${slug}`
  );

  return res.data
};
