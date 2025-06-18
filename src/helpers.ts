import type { IAnimal } from "./models/IAnimal";

export const hoursSinceLastFed = (lastFed: string): number => {
  const lastFedTime = new Date(lastFed).getTime();
  const now = new Date().getTime();
  const diffInMs = now - lastFedTime;
  return diffInMs / (1000 * 60 * 60);
};

export const getAnimalStatus = (lastFed: string): string => {
  const hours = hoursSinceLastFed(lastFed);

  if (hours >= 5) return "Behöver mat NU!";
  if (hours > 3) return "Börjar bli hungrig";
  return "Mätt";
};

export const updateFedStatusIfExpired = (animals: IAnimal[]): IAnimal[] => {
  return animals.map((animal) => {
    const hours = hoursSinceLastFed(animal.lastFed);
    if (hours >= 4 && animal.isFed) {
      return { ...animal, isFed: false };
    }
    return animal;
  });
};
