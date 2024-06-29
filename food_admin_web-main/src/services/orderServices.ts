import httpRequest from "utils/httpRequest";

export const getOrders = async () => {
  const res = await httpRequest("orders");

  return res.data;
};

export const updateOrderById =  (formData: any) => {
  return httpRequest.post("update-order-status", formData);
};
