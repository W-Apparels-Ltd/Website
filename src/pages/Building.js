import React from "react";
import { Link } from "react-router-dom";
import { buildings } from "../data/buildings";

const Building = () => {
  return (
    <main className="bg-white font-Nunito">
      <section aria-labelledby="buildings-heading" className="w-full bg-white">
        <header className="flex min-h-[108px] items-center justify-center px-5 py-8 text-center lg:min-h-[120px]">
          <h1
            id="buildings-heading"
            className="text-3xl font-bold text-black md:text-4xl"
          >
            Buildings and Occupants
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-4 px-4 pb-4 md:grid-cols-3 md:gap-0 md:px-0 md:pb-0">
          {buildings.map((building) => (
            <Link
              key={building.id}
              to={building.route}
              className="mb-3 group relative isolate flex min-h-[360px] items-center justify-center overflow-hidden rounded-xl bg-gray-900 focus:outline-none focus-visible:z-10 focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-white md:min-h-[400px] md:rounded-none lg:min-h-[405px]"
              aria-label={`View ${building.name} building details`}
            >
              <img
                src={building.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/45 group-focus-visible:bg-black/45"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"
              />

              <span className="relative z-10 px-6 text-center text-3xl font-bold tracking-wide text-white drop-shadow-lg lg:text-[34px]">
                {building.name}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Building;
