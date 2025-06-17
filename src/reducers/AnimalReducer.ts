import type { IAnimal } from "../models/IAnimal";

export type AnimalState = {
  animals: IAnimal[];
};

export type AnimalAction =
  | { type: "SET_ANIMALS"; payload: IAnimal[] }
  | { type: "UPDATE_ANIMAL"; payload: IAnimal };

export const animalReducer = (
  state: AnimalState,
  action: AnimalAction
): AnimalState => {
  switch (action.type) {
    case "SET_ANIMALS":
      return { animals: action.payload };
    case "UPDATE_ANIMAL":
      return {
        animals: state.animals.map((a) =>
          a.id === action.payload.id ? action.payload : a
        ),
      };
    default:
      return state;
  }
};
