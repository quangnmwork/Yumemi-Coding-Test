import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_DOMAIN,

  headers: {
    crossDomain: true,
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "X-API-KEY": process.env.REACT_APP_API_KEY,
    },
  };
});
export default axiosClient;
