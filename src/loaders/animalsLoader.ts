import { fetchAnimals } from "../services/animalService";

export const animalsLoader = async () => {
  const animals = await fetchAnimals();

  return { animals };
};
