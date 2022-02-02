import axiosClient from "../repository";
const resource = "prefectures";
export default {
  getPrefecture() {
    return axiosClient.get(`${resource}`);
  },
};
