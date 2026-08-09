import React from "react";
import { Link } from "react-router-dom";
import { BarChart3, Users } from "lucide-react";
import { buildings } from "../data/buildings";

const Building = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-4 py-8 md:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-4xl font-bold tracking-tight text-[#17212b] md:text-5xl">
            Buildings and Occupants
          </h2>

          <button
            type="button"
            aria-label="Search buildings"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#17212b] text-white transition hover:bg-[#263442]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </button>
        </div>

        {/* Buildings Grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {buildings.map((building) => (
            <Link
              key={building.id}
              to={building.route}
              aria-label={`View ${building.name} building details`}
              className="group relative isolate min-h-[500px] overflow-hidden rounded-xl bg-[#17212b] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#17212b]/30 md:min-h-[515px]"
            >
              {/* Image */}
              <img
                src={building.image}
                alt={building.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/35 to-black/5" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-7">
                {/* Building Name */}
                <h3 className="text-3xl font-bold tracking-tight text-white md:text-[32px]">
                  {building.name}
                </h3>

                {/* Green Line */}
                <div className="my-3 h-[2px] w-8 bg-[#63d84b] transition-all duration-300 group-hover:w-12" />

                {/* Short Description */}
                <p className="max-w-[430px] text-base leading-6 text-white/85 md:text-[17px]">
                  {building.shortDescription}
                </p>

                {/* Divider */}
                <div className="my-5 h-px w-full bg-white/15" />

                {/* Stats */}
                <div className="flex items-center">
                  {/* Monthly Capacity */}
                  <div className="flex flex-1 items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#55d94c]/50 bg-black/10">
                      <BarChart3
                        className="h-6 w-6 text-[#65df55]"
                        strokeWidth={2}
                      />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-white/75 md:text-sm">
                        Monthly Capacity
                      </p>

                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-semibold text-white md:text-[27px]">
                          {building.homePageCardDetails.monthlyCapacity}
                        </span>

                        <span className="text-xs text-white/75 md:text-sm">
                          Pcs
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="mx-4 h-14 w-px bg-white/20 md:mx-6" />

                  {/* Workforce */}
                  <div className="flex flex-1 items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#7474ff]/50 bg-black/10">
                      <Users
                        className="h-6 w-6 text-[#8989ff]"
                        strokeWidth={2}
                      />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-white/75 md:text-sm">
                        Workforce
                      </p>

                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-semibold text-white md:text-[27px]">
                          {building.homePageCardDetails.workforce.toLocaleString()}
                          +
                        </span>

                        <span className="text-xs text-white/75 md:text-sm">
                          People
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="pointer-events-none absolute inset-0 bg-white/0 transition duration-300 group-hover:bg-white/[0.03]" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Building;