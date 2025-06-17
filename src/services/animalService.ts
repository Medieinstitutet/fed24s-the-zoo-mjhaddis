import { type IAnimal } from "../models/IAnimal";
import { get } from "./serviceBase";

const BASE_URL = "https://animals.azurewebsites.net/api/animals";

export const fetchAnimals = async () => {
  const response = await get<IAnimal[]>(`${BASE_URL}`);

  return response;
};
