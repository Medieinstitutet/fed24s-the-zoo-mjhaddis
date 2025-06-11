import { useLoaderData } from "react-router";
import type { IAnimalExt } from "../models/IAnimal";

export const AnimalPage = () => {
  const { animal } = useLoaderData() as { animal: IAnimalExt };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-8xl">ANIMAL PAGE</h1>
      </div>
      <div className="">
        <h3 className="text-2xl">{animal.name}</h3>
        <h2 className="text-xl">Latinskt namn: {animal.latinName}</h2>
        <h2 className="text-xl">Född: {animal.yearOfBirth}</h2>
        <img
          src={animal.imageUrl}
          alt={animal.name}
          onError={(e) => {
            e.currentTarget.src = "/placeholder.png";
          }}
          className="max-w-sm max-h-40 "
        />
        <p>{animal.longDescription}</p>
        <p>
          Senast matad:{" "}
          {new Date(animal.lastFed).toLocaleString("sv-SE", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </p>
        <p>Medicin: {animal.medicine} </p>
      </div>
    </>
  );
};
