import httpRequest from "utils/httpRequest";

export const getProducts = async () => {
  const res = await httpRequest("products");

  return res.data;
};

export const getProductById = async (id: string | number) => {
  const res = await httpRequest(`product/${id}`);

  return res.data;
};

export const deletePoduct = (id: string) => httpRequest.post(`delete-product/${id}`);

export const createProduct = async (formData: any) => {
  try {
    return await httpRequest("add-product", {
      method: "post",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProductById = async (formData: any) => {
  await httpRequest(`update-product`, {
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
