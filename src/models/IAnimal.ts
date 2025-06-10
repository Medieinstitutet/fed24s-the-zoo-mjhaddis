export interface IAnimal {
  id: number;
  name: string;
  imageUrl: string;
  isFed: boolean;
  lastFed: string;
  shortDescription: string;
}

export interface IAnimalExt extends IAnimal {
  latinName: string;
  yearOfBirth: number;
  longDescription: string;
  medicine: string;
}
