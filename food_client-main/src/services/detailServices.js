import axios from "axios";

export const getDetailProductById = async (id) => {
  const res = await axios.get(
    `https://music-demo123123.000webhostapp.com/api/product/${id}`
  );

  return res.data;
};

export const getSimilarProductById = async (id) => {
  const res = await axios.get(
    `https://music-demo123123.000webhostapp.com/api/similar-products/${id}`
  );

  return res.data;
};
