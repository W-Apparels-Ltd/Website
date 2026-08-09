import React from "react";
import { Link } from "react-router-dom";
import { BarChart3, Users, Search } from "lucide-react";
import { buildings } from "../data/buildings";

const BuildingsandOccupants = () => {
  return (
    <section className="w-full bg-white">
      {/* Header */}
      <header className="flex min-h-[108px] items-center justify-center px-5 py-8 text-center lg:min-h-[120px]">
        <h2
          id="buildings-heading"
          className="text-3xl font-bold text-black md:text-4xl"
        >
          Buildings and Occupants
        </h2>
      </header>
      {/* Buildings Grid */}
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {buildings.map((building) => (
          <Link
            key={building.id}
            to={building.route}
            aria-label={`View ${building.name} building details`}
            className="group relative isolate flex min-h-[480px] w-full overflow-hidden bg-[#17212b] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#17212b]/30 md:min-h-[500px] lg:min-h-[520px]"
          >
            {/* Image */}
            <img
              src={building.image}
              alt={building.name}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/45 to-black/5" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-7">
              {/* Name */}
              <h3 className="text-3xl font-bold tracking-tight text-white lg:text-[32px]">
                {building.name}
              </h3>

              {/* Green Line */}
              <div className="my-3 h-[2px] w-8 bg-[#63d84b] transition-all duration-300 group-hover:w-12" />

              {/* Description */}
              <p className="min-h-[48px] max-w-[460px] text-base leading-6 text-white/80">
                {building.shortDescription}
              </p>

              {/* Divider */}
              <div className="my-5 h-px w-full bg-white/15" />

              {/* Stats */}
              <div className="flex items-center">
                {/* Monthly Capacity */}
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#55d94c]/50">
                    <BarChart3
                      className="h-6 w-6 text-[#65df55]"
                      strokeWidth={2}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium text-white/75">
                      Monthly Capacity
                    </p>

                    <div className="flex items-baseline gap-1">
                      <span className="truncate text-2xl font-semibold text-white">
                        {building.homePageCardDetails.monthlyCapacity}
                      </span>

                      <span className="text-xs text-white/75">Pcs</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-3 h-14 w-px shrink-0 bg-white/20 md:mx-4" />

                {/* Workforce */}
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#7474ff]/50">
                    <Users className="h-6 w-6 text-[#8989ff]" strokeWidth={2} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium text-white/75">
                      Workforce
                    </p>

                    <div className="flex items-baseline gap-1">
                      <span className="truncate text-2xl font-semibold text-white">
                        {building.homePageCardDetails.workforce.toLocaleString()}
                        +
                      </span>

                      <span className="text-xs text-white/75">People</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-white/0 transition duration-300 group-hover:bg-white/[0.03]" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BuildingsandOccupants;
