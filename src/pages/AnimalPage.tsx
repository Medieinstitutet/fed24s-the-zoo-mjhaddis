import { useParams } from "react-router";
import { useAnimalContext } from "../context/AnimalContext";
import { NotFound } from "./Notfound";
import { hoursSinceLastFed } from "../helpers";

export const AnimalPage = () => {
  const { id } = useParams();
  const { state, dispatch } = useAnimalContext();

  const animal = state.animals.find((a) => a.id === Number(id));
  if (!animal) return <NotFound />;

  const hoursSinceFed = hoursSinceLastFed(animal.lastFed);

  const handleFeed = () => {
    if (hoursSinceFed >= 4)
      dispatch({ type: "FEED_ANIMAL", payload: animal.id });
  };

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url(/earth.png)",
        }}
      >
        <section className="pt-5 pb-5">
          <article className="bg-amber-50 rounded-xl p-6 mt-20 shadow-2xl text-black max-w-4xl mx-auto w-full">
            <div className="flex justify-center mb-4">
              <img
                src={animal.imageUrl}
                alt={animal.name}
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.png";
                }}
                className="max-w-sm max-h-full rounded-xl "
              />
            </div>

            <div className="flex flex-col gap-3 mb-4">
              <h1 className="text-2xl font-bold">
                {animal.name}{" "}
                <span className="italic">({animal.latinName})</span>
              </h1>
              <h2 className="text-xl font-semibold">
                Född:<span className="font-normal"> {animal.yearOfBirth}</span>
              </h2>
              <p> {animal.shortDescription} </p>
              <p>{animal.longDescription}</p>
              {hoursSinceFed >= 3 && <p>{animal.name} börjar bli hungrig!</p>}
            </div>

            <div className="flex justify-between">
              <p>
                <span className="font-semibold">Senast matad: </span>
                {new Date(animal.lastFed).toLocaleString("sv-SE", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>

              <button
                onClick={handleFeed}
                disabled={hoursSinceFed < 4}
                className={`px-4 py-2 rounded text-white transition-all duration-300
    ${
      hoursSinceFed >= 4
        ? "bg-green-700 hover:bg-green-800 cursor-pointer"
        : "bg-red-600 cursor-not-allowed"
    }
  `}
              >
                Mata djuret
              </button>
            </div>
            <div className="flex justify-items-start">
              <p className="font-semibold">
                Medicin: <span className="font-normal">{animal.medicine}</span>{" "}
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};
