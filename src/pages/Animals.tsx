import { Link } from "react-router";
import { useAnimalContext } from "../context/AnimalContext";
import { getAnimalStatus } from "../helpers";

export const Animals = () => {
  const { state } = useAnimalContext();

  return (
    <>
      <div className="flex justify-center mb-8">
        <h1 className="text-8xl">ANIMALS</h1>
      </div>
      <div>
        <ul className="grid grid-cols-3 gap-4 mx-2">
          {state.animals.map((animal) => {
            const status = getAnimalStatus(animal.lastFed);

            return (
              <li
                className="border-white border-solid border-2 p-4"
                key={animal.id}
              >
                <h2 className="text-xl font-bold">{animal.name}</h2>
                <img
                  src={animal.imageUrl}
                  alt={animal.name}
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.png";
                  }}
                  className="max-w-sm max-h-40"
                />
                <p>{animal.shortDescription}</p>
                <p>
                  Senast matad:{" "}
                  {new Date(animal.lastFed).toLocaleString("sv-SE", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
                <p className="font-semibold">Status: {status}</p>
                <Link to={`/animals/${animal.id}`}>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                    Läs mer
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
