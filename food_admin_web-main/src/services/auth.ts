import httpRequest from "utils/httpRequest";

export const getUsers = async () => {
  const res = await httpRequest("users");
  return res.data;
};

export const deleteUserById = async(id: number) => await httpRequest.post(`delete-user/${id}`);
