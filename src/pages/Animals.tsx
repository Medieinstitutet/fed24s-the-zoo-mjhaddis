import { useLoaderData } from "react-router";
import { type IAnimal } from "../models/IAnimal";

export const Animals = () => {
  const { animals } = useLoaderData() as { animals: IAnimal[] };

  return (
    <>
      <div className="flex justify-center mb-8">
        <h1 className="text-8xl">ANIMALS</h1>
      </div>
      <div>
        <ul className="grid grid-cols-3 gap-4">
          {animals.map((animal) => (
            <li key={animal.id}>
              <h2>{animal.name}</h2>
              <img src={animal.imageUrl} height={200} width={200} />
              <p> {animal.shortDescription} </p>
              <p>Last fed: {animal.lastFed}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
