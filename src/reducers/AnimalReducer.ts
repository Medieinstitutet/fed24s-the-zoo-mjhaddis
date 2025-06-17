import type { IAnimal } from "../models/IAnimal";

export type AnimalState = {
  animals: IAnimal[];
};

export type AnimalAction =
  | { type: "SET_ANIMALS"; payload: IAnimal[] }
  | { type: "UPDATE_ANIMAL"; payload: IAnimal }
  | { type: "FEED_ANIMAL"; payload: number };

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
    case "FEED_ANIMAL":
      return {
        animals: state.animals.map((a) =>
          a.id === action.payload
            ? {
                ...a,
                isFed: true,
                lastFed: new Date().toISOString(),
              }
            : a
        ),
      };
    default:
      return state;
  }
};
