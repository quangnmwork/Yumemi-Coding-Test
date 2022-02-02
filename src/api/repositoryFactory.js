import populationRepository from "./population/populationRepository";
import prefectureRepository from "./prefecture/prefectureRepository";
const repositories = {
  populations: populationRepository,
  prefectures: prefectureRepository,
};

const RepositoryFactory = {
  get: (name) => repositories[name],
};
export default RepositoryFactory;
