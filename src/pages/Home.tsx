import { NavLink } from "react-router";

export const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="/zoo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">
            Välkommen till Zoo:t
          </h1>
          <p className="text-xl mb-8 drop-shadow-md">
            Upptäck våra djur och deras värld
          </p>
          <NavLink to={"/animals"}>
            <button className="bg-green-700 hover:bg-green-800 px-6 py-3 rounded-lg shadow-md transition-all cursor-pointer">
              Se djuren
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
