import { createContext, useContext, useEffect, useReducer } from "react";
import {
  animalReducer,
  type AnimalState,
  type AnimalAction,
} from "../reducers/AnimalReducer";
import { fetchAnimals } from "../services/animalService";

const AnimalContext = createContext<{
  state: AnimalState;
  dispatch: React.Dispatch<AnimalAction>;
}>({ state: { animals: [] }, dispatch: () => null });

export const AnimalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(animalReducer, { animals: [] });

  useEffect(() => {
    const load = async () => {
      const local = localStorage.getItem("animals");

      try {
        if (local) {
          const parsed = JSON.parse(local);

          if (Array.isArray(parsed) && parsed.length > 0) {
            dispatch({ type: "SET_ANIMALS", payload: parsed });
            return;
          }
        }
      } catch (err) {
        console.error("localStorage data ogiltig, hämtar från API", err);
      }
      const animals = await fetchAnimals();
      dispatch({ type: "SET_ANIMALS", payload: animals });
    };

    load();
  }, []);

  useEffect(() => {
    localStorage.setItem("animals", JSON.stringify(state.animals));
  }, [state.animals]);

  return (
    <AnimalContext.Provider value={{ state, dispatch }}>
      {children}
    </AnimalContext.Provider>
  );
};

export const useAnimalContext = () => useContext(AnimalContext);
