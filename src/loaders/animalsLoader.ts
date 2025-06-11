import type { LoaderFunctionArgs } from "react-router";
import { fetchAnimals } from "../services/animalService";
import { fetchAnimalById } from "../services/animalService";

export const animalsLoader = async () => {
  const animals = await fetchAnimals();

  return { animals };
};

export const animalLoader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  if (!id) throw new Error("Djur-ID saknas");
  const animal = await fetchAnimalById(id);

  return { animal };
};
