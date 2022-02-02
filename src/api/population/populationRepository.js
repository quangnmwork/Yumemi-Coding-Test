import axiosClient from "../repository";
const resource = "population/composition/perYear";
export default {
  getPopulation(prefCode) {
    return axiosClient.get(`${resource}`, { params: { prefCode } });
  },
};
