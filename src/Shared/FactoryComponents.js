import React from 'react';
import fabricInspection from '../images/factory-components/fabric-inspection.jpg';
import sewing from '../images/factory-components/sewing.jpg';
import cutting from '../images/factory-components/cutting.jpg';
import qualityAssurance from '../images/factory-components/quality-assurance.jpg';
import sustainabilityDevelopment from '../images/factory-components/sustainability-development.jpg';
import packaging from '../images/factory-components/packaging.jpg';

const factoryComponents = [
  {
    name: 'Fabric Inspection',
    image: fabricInspection,
  },
  {
    name: 'Sewing',
    image: sewing,
  },
  {
    name: 'Cutting',
    image: cutting,
  },
  {
    name: 'Quality Assurance',
    image: qualityAssurance,
  },
  {
    name: 'Sustainability & Development',
    image: sustainabilityDevelopment,
  },
  {
    name: 'Packaging',
    image: packaging,
  },
];

const FactoryComponents = () => {
  return (
    <section
      id="factory-components"
      aria-labelledby="factory-components-heading"
      className="bg-white px-5 py-16 font-Nunito sm:px-8 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1680px]">
        <h2
          id="factory-components-heading"
          className="mb-12 text-center text-3xl font-bold text-black md:mb-16 md:text-4xl"
        >
          Our Factory Component
        </h2>

        <div className="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {factoryComponents.map((component) => (
            <article key={component.name} className="group text-center">
              <div className="mx-auto aspect-[4/6] w-full max-w-[350px] overflow-hidden bg-gray-100 shadow-sm">
                <img
                  src={component.image}
                  alt={`${component.name} at W. Apparels factory`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.1]"
                />
              </div>

              <h3 className="mx-auto mt-3 max-w-[240px] text-lg font-bold leading-7 text-[#5f554f] md:text-2xl">
                {component.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactoryComponents;
