import { Link } from "react-router";
import { useAnimalContext } from "../context/AnimalContext";
import { getAnimalStatus } from "../helpers";

export const Animals = () => {
  const { state } = useAnimalContext();

  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url(/forrest.png)",
        }}
      >
        <div className="flex justify-center mb-8">
          <h1 className="text-7xl font-bold text-black">Våra djur</h1>
        </div>
        <section className="pb-2">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 mx-4">
            {state.animals.map((animal) => {
              const status = getAnimalStatus(animal.lastFed);

              return (
                <li
                  className="flex flex-col p-4 hover:scale-102 duration-300 bg-amber-50 text-black rounded shadow-xl"
                  key={animal.id}
                >
                  <div className="flex justify-center mb-2">
                    <h2 className="text-xl font-bold">{animal.name}</h2>
                  </div>
                  <div className="w-full h-48 overflow-hidden mb-2">
                    <img
                      src={animal.imageUrl}
                      alt={animal.name}
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.png";
                      }}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <p className="mb-2">{animal.shortDescription}</p>

                  <p className="mb-2 font-semibold">
                    Senast matad:{" "}
                    <span className="font-normal">
                      {" "}
                      {new Date(animal.lastFed).toLocaleString("sv-SE", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}{" "}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Status: <span className="font-normal">{status} </span>
                  </p>
                  <div className="mt-auto flex justify-end">
                    <Link to={`/animals/${animal.id}`}>
                      <button className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded cursor-pointer">
                        Läs mer
                      </button>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
};
