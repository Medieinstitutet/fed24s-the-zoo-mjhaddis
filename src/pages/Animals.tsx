import { Link } from "react-router";
import { useAnimalContext } from "../context/AnimalContext";

export const Animals = () => {
  const { state } = useAnimalContext();

  return (
    <>
      <div className="flex justify-center mb-8">
        <h1 className="text-8xl">ANIMALS</h1>
      </div>
      <div>
        <ul className="grid grid-cols-3 gap-4 mx-2">
          {state.animals.map((animal) => (
            <li className="border-white border-solid border-2" key={animal.id}>
              <h2>{animal.name}</h2>
              <img
                src={animal.imageUrl}
                alt={animal.name}
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.png";
                }}
                className="max-w-sm max-h-40 "
              />
              <p>{animal.shortDescription}</p>
              <p>
                Senast matad:{" "}
                {new Date(animal.lastFed).toLocaleString("sv-SE", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>
              <Link to={`/animals/${animal.id}`}>
                <button>Läs mer</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
