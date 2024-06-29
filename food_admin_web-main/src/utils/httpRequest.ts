import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://music-demo123123.000webhostapp.com/api/admin/",
  method: "get",
});

export default httpRequest;
