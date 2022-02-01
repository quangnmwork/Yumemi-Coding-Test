import populationRepository from "./population/populationRepository";
import prefectureRepository from "./prefecture/prefectureRepository";
const repositories = {
  populations: populationRepository,
  prefectures: prefectureRepository,
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
