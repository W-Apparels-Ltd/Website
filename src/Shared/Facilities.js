import React from "react";

import product1 from "../images/factory_purpose/trainnig.jpg";
import product2 from "../images/factory_purpose/medical (1).jpg";
import product3 from "../images/factory_purpose/cc.jpg";
import product4 from "../images/factory_purpose/66666-1.png";
import product5 from "../images/factory_purpose/777777.jpg";
import product6 from "../images/factory_purpose/medical (2).jpg";

const facilities = [
  {
    id: 1,
    title: "Safety Measures",
    image: product1,
    alt: "Safety Measures",
    description:
      "We maintain strict workplace safety standards to ensure a secure and healthy environment for all employees.",
  },
  {
    id: 2,
    title: "Medical Facilities",
    image: product2,
    alt: "Medical Facilities",
    description:
      "Dedicated medical facilities provide employees with quick and reliable healthcare support whenever needed.",
  },
  {
    id: 3,
    title: "Child Care",
    image: product3,
    alt: "Child Care",
    description:
      "A safe and caring environment is provided for employees' children during working hours.",
  },
  {
    id: 4,
    title: "Fire Training",
    image: product4,
    alt: "Fire Training",
    description:
      "Regular fire safety training prepares employees to respond quickly and effectively during emergencies.",
  },
  {
    id: 5,
    title: "First Aid Training",
    image: product5,
    alt: "First Aid Training",
    description:
      "Employees receive practical first aid training to provide immediate assistance during workplace emergencies.",
  },
  {
    id: 6,
    title: "Food Facilities",
    image: product6,
    alt: "Food Facilities",
    description:
      "Clean and hygienic food facilities provide employees with nutritious meals in a comfortable environment.",
  },
];

const Facilities = () => {
  return (
    <div
      id="facilities"
      className="min-h-screen bg-base-100 pb-10 font-Nunito lg:px-20"
    >
      <div className="pb-20">
        {/* Section Title */}
        <div className="pb-10 text-center">
          <h1 className="text-2xl font-bold text-primary md:text-3xl lg:text-4xl">
            Facilities
          </h1>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 gap-4 px-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="
                card
                group
                relative
                z-0
                w-full
                overflow-hidden
                bg-base-100
                shadow-xl
                transition-all
                duration-300
                ease-out
                hover:z-10
                hover:scale-[1.02]
                hover:shadow-2xl
              "
            >
              {/* Image */}
              <figure className="relative overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.alt}
                  loading="lazy"
                  className="
                    h-auto
                    w-full
                    object-cover
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:blur-[3px]
                    group-hover:brightness-75
                  "
                />

                {/* Light Dark Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-black/55
                    px-6
                    text-center
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <p
                    className="
                      max-w-md
                      translate-y-3
                      text-xl
                      font-medium
                      leading-relaxed
                      text-gray-200
                      drop-shadow-lg
                      transition-transform
                      duration-300
                      group-hover:translate-y-0
                      md:text-3xl
                    "
                  >
                    {facility.description}
                  </p>
                </div>
              </figure>

              {/* Title */}
              <div className="flex min-h-[60px] items-center justify-center px-2 py-3">
                <h2 className="text-center text-lg font-bold md:text-base lg:text-lg">
                  {facility.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;