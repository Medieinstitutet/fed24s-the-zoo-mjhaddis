import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  animalReducer,
  type AnimalState,
  type AnimalAction,
} from "../reducers/AnimalReducer";
import { fetchAnimals } from "../services/animalService";
import { updateFedStatusIfExpired } from "../helpers";

const AnimalContext = createContext<{
  state: AnimalState;
  dispatch: React.Dispatch<AnimalAction>;
}>({ state: { animals: [] }, dispatch: () => null });

export const AnimalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(animalReducer, { animals: [] });
  const [isIntialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const load = async () => {
      const local = localStorage.getItem("animals");

      try {
        if (local) {
          const parsed = JSON.parse(local);

          if (Array.isArray(parsed) && parsed.length > 0) {
            const cleaned = updateFedStatusIfExpired(parsed);
            dispatch({ type: "SET_ANIMALS", payload: cleaned });
            setIsInitialized(true);
            return;
          }
        }
      } catch (err) {
        console.error("localStorage data ogiltig, hämtar från API", err);
      }
      const animalsFromApi = await fetchAnimals();
      const cleaned = updateFedStatusIfExpired(animalsFromApi);
      dispatch({ type: "SET_ANIMALS", payload: cleaned });
      setIsInitialized(true);
    };

    load();
  }, []);

  useEffect(() => {
    if (isIntialized) {
      localStorage.setItem("animals", JSON.stringify(state.animals));
    }
  }, [state.animals, isIntialized]);

  return (
    <AnimalContext.Provider value={{ state, dispatch }}>
      {children}
    </AnimalContext.Provider>
  );
};

export const useAnimalContext = () => useContext(AnimalContext);
